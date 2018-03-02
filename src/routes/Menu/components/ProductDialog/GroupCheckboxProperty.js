import React from 'react'
import menufieldCommon from '../../../../utils/menufield.common'
import { CheckBox } from '../../../../../react-ui';

const GroupCheckboxProperty = ({ property, stateProps = [], onChange, bindTo, price }) => {

    return (<div className="row">
        {menufieldCommon.orderASC(property.properties).map((item, index) => {
            return <div className="col-6 col-sm-4" key={index}>
                <CheckBox id={`${property.key}-${item.key}`} checked={stateProps[item.key] ? true : false} size="small" color="success"
                label={item.name}
                onChange={onChange.bind(bindTo, property, {
                    ...item,
                    price : item.priceList ? item.priceList.find(x => x.parentPrice === price.id).value : item.price
                })} />
                {/* <label htmlFor={`${property.key}-${item.key}`} className="control-label clb-3" style={{marginLeft : "3px"}}>{item.name}</label> */}
            </div>
        })
        }
    </div>)
}

// class GroupCheckboxProperty extends React.PureComponent {

//     constructor() {
//         super();

//     }

//     componentDidMount() {
//         this.state = {
//             selections: [],
//             type: this.props.property.name,
//             order: this.props.property.order,
//             inputType: this.props.property.type,
//             key : this.props.property.key
//         }
//     }

//     renderPrice(item) {
//         if (item.price)
//             return <span> (${item.price})</span>
//         else
//             return <span></span>
//     }



//     onChange(e, item) {
//         const currentState = Object.assign({}, this.state);
//         if (e.target.checked) {
//             const selection = {
//                 "order": item.order,
//                 "key": item.key,
//                 "selectedPrice": item.priceList ? item.priceList : item.price,
//                 "selectedName": item.name
//             }
//             currentState.selections.push(selection);        
//         } else {
//             const targetSelection = this.state.selections.find((_item) => _item.key === item.key);
//             if(targetSelection){
//                 currentState.selections.splice(currentState.selections.indexOf(targetSelection), 1);
//             }
//         }

//         this.setState(Object.assign({}, currentState), this.props.selectionChanged(currentState));    
//     }

//     render() {

//         const { property, value } = this.props;
//         return (
//             <div className="row">
//                 <div className="col-sm-12">
//                     <label className="control-label clb-2" style={{ paddingTop: "0px" }}>{property.name}</label>
//                 </div>

//                 {menufieldCommon.orderASC(property.properties).map((item, index) => {               
//                     return (
//                         <div className="col-sm-4 truncate" key={index}>
//                             <input type="checkbox" 
//                             id={`${property.key}-${item.key}`} 
//                             checked = { value.indexOf(`${property.key}|${item.key}`) >= 0 ? true : false }
//                             onChange={this.props.selectionChanged.bind(this, {
//                                 key : `${property.key}|${item.key}`,
//                                 name : item.name,
//                                 type : item.type,
//                                 group : property.name,
//                                 price : item.price
//                             })} /> 
//                             <label htmlFor={`${property.key}-${item.key}`} className="control-label clb-3">{item.name}{this.renderPrice(item)}</label>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default GroupCheckboxProperty