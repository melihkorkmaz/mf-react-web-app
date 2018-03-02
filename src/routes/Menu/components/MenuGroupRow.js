import React from 'react'
import menufieldCommon from '../../../utils/menufield.common'
class MenuGroupRow extends React.PureComponent {

    constructor(){
        super();

        this.state = {
            quantity : 1
        }
    }

    quantityChanged(e, a){
        this.setState({
            quantity : e.target.value
        })
    }

    showModal(){
        this.props.onModalShow(this.props.product);
    }

    render() {

        const { product } = this.props

        const priceFormat = (price) => {
            return price.length > 1 
                ? `$${menufieldCommon.sort(price)('value')[0].value}+`
                : `$${price[0].value}`
                
        }

        return (
            <tr onClick={this.showModal.bind(this)}>
                {/* <td>
                    <div className="input-group ">
                        <input name="quantity" className="form-control form-control-smx" type="text" value={this.state.quantity} onChange={this.quantityChanged.bind(this)} />
                        <span className="input-group-addon btn-menu-plus menu-add-item-ig"><i className="fa fa-plus"></i></span>
                    </div>
                </td> */}
                <td>
                    <a className="menu-item-link">{product.name}</a>
                    <p className="menu-item-desc">{product.description}</p>
                </td>
                <td>
                    <div>
                        <span className="menu-item-price">
                            { priceFormat(product.price)}
                        </span>
                    </div>
                </td>
            </tr>
        )
    }
}

export default MenuGroupRow