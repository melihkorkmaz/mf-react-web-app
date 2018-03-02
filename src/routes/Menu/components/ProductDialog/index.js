import React from 'react';
import { connect } from 'react-redux';
import { addUserBasket } from 'store/userBasket.reducer';
import PriceList from './PriceList';
import Label from './Label';
import {CheckBox, SelectList} from '../../../../../react-ui'
import GroupCheckboxProperty from './GroupCheckboxProperty';
import menufieldCommon, { switchcase } from 'utils/menufield.common'
import { totalItemPrice, singleItemPrice, defaultPropSelection } from 'utils/product.utils'
import { Button, TextArea } from '../../../../../react-ui';
// - Name
// - Description
// - GroupId
// - Group Name
// - Quantity
// - Note
// - Selection
// - Price
// - Items
//     - Name
//     - Price
//     - SubItems
//         - Name
//         - Price
class ProductDialog extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            quantity: 1,
            price: 0,
            properties: [],
            note: ""
        }
    }

    //Component Lifecycle
    componentWillMount() {
        const { product } = this.props;

        if (!product || !product.price)
            this.setState(undefined);
        else
            this.setState({
                _id : product._id,
                name: product.name,
                description: product.description,
                properties: product.properties.filter(x => x.type === "selectlist").reduce((acc, prop) => {
                    const defaultSelection = menufieldCommon.orderASC(prop.source)[0];
                    acc[prop.key] = {
                        name: prop.name,
                        type: prop.type,
                        selected: {
                            name: defaultSelection.name,
                            value: defaultSelection.value || defaultSelection.name,
                            order: defaultSelection.order,
                            price: defaultSelection.priceByBasePriceId ? defaultSelection.priceByBasePriceId[product.price[0].id] : defaultSelection.price
                        }

                    }

                    if (prop.priceRelated) {
                        acc[prop.key].priceRelated = true;
                        acc[prop.key].showByPrice = prop.showByPrice
                    }

                    return acc;
                }, {}),
                quantity: 1,
                price: product.price[0]
            })

    }

    //Events
    quantityChanged(e) {
        var value = e.target.value;
        if (menufieldCommon.isNumber(value)) {
            this.setState({
                quantity: parseInt(value)
            })
        }

    }

    priceSelected(priceList, e) {
        this.setState({
            price: priceList[e.target.value]
        })
    }

    propertySelectionChanged(property, additionalParam, e) {

        const htmlValue = property.type === "selectlist" ? e.target.value : e.target.checked;

        const switcher = switchcase({
            "checkbox": htmlValue ? this.addObjectToStateProperties.bind(this, property) : this.removeObjectFromStateProperties.bind(this, property),
            "selectlist": () => {
                this.setState({
                    properties: Object.assign({}, this.state.properties, {
                        [property.key]: {
                            name: property.name,
                            type: property.type,
                            showByPrice: property.showByPrice,
                            selected: additionalParam.find(item => (item.value === htmlValue || item.name === htmlValue))
                        }
                    })
                })
            },
            "group-checkbox": () => {
                htmlValue ? this.addObjectToStateProperties(property, additionalParam) : this.removeObjectFromStateProperties(property, additionalParam);
            }
        })(() => { });


        switcher(property.type);
    }

    noteChanged(e) {
        this.setState({
            note: e.target.value
        })
    }

    add() {
        const group = this.props.groups.find(x => x._id === this.props.product.groupId);

        let item = {
            uniqueKey: Date.now(),
            _id : this.state._id,
            name: this.state.name,
            description: this.state.description,
            note: this.state.note,
            quantity: this.state.quantity,
            group : {
                name : group.name,
                _id : group._id
            },
            totalPrice: totalItemPrice(this.state, this.props.product.discountOptions),
            properties: Object.keys(this.state.properties).reduce((acc, c) => {
                const current = this.state.properties[c];

                if (current.priceRelated && current.showByPrice[this.state.price.id] === false) return acc;

                if (current.type !== "group-checkbox")
                    acc[current.name] = current.selected.value === c ? "Checked" : current.selected.name;
                else {
                    acc[current.name] = Object.keys(current).reduce((prev, a) => {
                        if (typeof current[a] === "object")
                            prev[current[a].name] = current[a].selected.value === a ? "Checked" : current[a].selected.name;

                        return prev;
                    }, {})
                }

                return acc;
            }, this.state.price.title && this.state.price.name ? {
                [this.state.price.title]: this.state.price.name
            } : {})
        };

        item.unitPrice = item.totalPrice / item.quantity;
        item.tax = menufieldCommon.multiply(this.props.restaurant.taxRate / 100)(item.totalPrice);


        this.props.addUserBasket(item);
        this.props.onHideModal();
    }


    //Methods
    addObjectToStateProperties(property, additionalParam) {

        var properties = Object.assign({}, this.state.properties);

        var newProp = {
            name: additionalParam ? additionalParam.name : property.name,
            group: property.key,
            selected: {
                name: additionalParam ? additionalParam.name : property.name,
                price: additionalParam ? additionalParam.price || 0 : property.price || 0,
                value: additionalParam ? additionalParam.key : property.key,
                priceList: additionalParam ? additionalParam.priceList : property.priceList,
            },
            type: additionalParam ? additionalParam.type : property.type
        }

        if (additionalParam) {
            properties[property.key] ? properties[property.key][additionalParam.key] = newProp : properties[property.key] = { [additionalParam.key]: newProp, type: "group-checkbox", name: property.name }
        }
        else
            properties[property.key] = newProp;

        this.setState({
            properties: properties
        })
    }

    removeObjectFromStateProperties(property, additionalParam) {
        var properties = Object.assign({}, this.state.properties);


        if (additionalParam)
            delete properties[property.key][additionalParam.key];
        else
            delete properties[property.key];
        this.setState({ properties: properties });
    }

    changeSelectedValueOfStateProperties(key) {
        return value => {
            var properties = Object.assign({}, this.state.properties);
            properties[key].selected = value;

            this.setState({ properties: properties })
        }
    }

    renderByPropType(property, index) {

        const isVisible = property.showByPrice
            ? property.showByPrice[this.state.price.id] : true;


        const view = isVisible ? (
            <div className="form-group form-group-sm" key={index}>
                <div className="row">
                    <Label htmlForKey={property.key} name={property.name} price={property.price} customClassName={property.type === "group-checkbox" ? "col-sm-12" : "col-7 col-sm-4"} />
                    <div className={property.type === "group-checkbox" ? "col-sm-12" : "col-5 col-sm-8"}>
                        {switchcase({
                            "checkbox": () => <CheckBox color="success" id={property.key} checked={this.state.properties[property.key] ? true : false} onChange={this.propertySelectionChanged.bind(this, property, null)} />,
                            "selectlist": () => {
                                const source = property.priceRelated
                                    ? property.source.map(item => {
                                        return {
                                            order: item.order,
                                            value: item.value || item.name,
                                            name: item.name,
                                            priceByBasePriceId: item.priceByBasePriceId,
                                            price: item.priceByBasePriceId ?
                                                item.priceByBasePriceId[this.state.price.id] : item.price
                                        }
                                    })
                                    : property.source;

                                return (!property.showByPrice || (property.showByPrice && property.showByPrice[this.state.price.id])) ?
                                    <SelectList value={this.state.properties[property.key].selected.value} source={source} titleKey="name" onChange={this.propertySelectionChanged.bind(this, property, source)} style={{height: "30px", padding: "0px 8px"}} /> : null;
                            },
                            "group-checkbox": () => {
                                return <GroupCheckboxProperty bindTo={this} property={property} stateProps={this.state.properties[property.key]} onChange={this.propertySelectionChanged} price={this.state.price} />
                            }
                        })(() => <div></div>)(property.type)}
                    </div>
                </div>
            </div>
        ) : "";

        return view;
    }

    //RENDER
    render() {
        if (!this.state) return (<div></div>);

        const { product } = this.props;

        return (
            <div className="product-dialog">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-light btn-number btn-sm item-count-btn" type="button" onClick={() => { this.setState({ quantity: this.state.quantity - 1 }) }} disabled={this.state.quantity <= 1}>
                            <span className="fa fa-minus"></span>
                        </button>
                    </span>
                    <input className="form-control input-number input-sm item-count-input" type="text" value={this.state.quantity} onChange={this.quantityChanged.bind(this)} />
                    <span className="input-group-btn">
                        <button className="btn btn-light btn-number btn-sm item-count-btn" type="button" onClick={() => { this.setState({ quantity: this.state.quantity + 1 }) }}>
                            <span className="fa fa-plus"></span>
                        </button>
                    </span>
                </div>
                <div className="well well-sm well-price well-outline-warning">${totalItemPrice(this.state, product.discountOptions).toFixed(2)}</div>
                <PriceList priceSelected={this.priceSelected.bind(this)} priceList={product.price} selected={this.state.price} />
                <div className="clearfix"></div>
                <hr style={{ marginBottom: "10px" }} />

                <div className="form-horizontal">
                    {menufieldCommon.orderASC(product.properties).map(this.renderByPropType.bind(this))}

                    <div className="form-group form-group-sm" style={{ marginTop: "15px" }}>
                        <div className="row">
                            <div className="col-sm-12">
                                <TextArea rows="4" onChange={this.noteChanged.bind(this)} rows="4" placeholder="Note here..." value={this.state.note}></TextArea>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <hr className="hr-3" />
                    <Button color="success" className="pull-right" onClick={this.add.bind(this)} style={{minWidth : "100px"}}>
                    Add
                    </Button>
                    <Button onClick={this.props.onHideModal.bind(this)} className="pull-right" style={{marginRight : "10px"}}>
                    Cancel
                    </Button>
                    <div className="clearfix"></div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurant.info,
        groups : state.restaurant.menu.groups
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBasket: (item) => dispatch(addUserBasket(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDialog);