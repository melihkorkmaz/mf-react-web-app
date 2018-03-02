import React from 'react';

import { UserNote , renderProp } from 'utils/product.utils';

const BasketItemsBody = ({ item, quantityChange, removeItem, showUnitPrice }) => {

    const removeCurrentItem = () => {
        removeItem(item);
    }

   
    return (<tbody>
        <tr className="item-row">
            <td className="item-name">{item.name}</td>
            {showUnitPrice ? <td>{item.unitPrice.toFixed(2)}</td> : null}
            <td>
                <input className="qty-input" type="text" onChange={quantityChange.bind(this, item)} value={item.quantity} />
            </td>
            <td>{item.totalPrice.toFixed(2)}</td>
            <td className="remove-item" onClick={removeCurrentItem}>
                <i aria-hidden="true" className="fa fa-times"></i>
            </td>
        </tr>
        <tr>
            <td className="item-details" colSpan="4">
                {renderProp(item.properties)}
                {(item.note && item.note.length > 0) ? <UserNote>{item.note}</UserNote> : null}
            </td>
        </tr>
    </tbody>)
}

export default BasketItemsBody;