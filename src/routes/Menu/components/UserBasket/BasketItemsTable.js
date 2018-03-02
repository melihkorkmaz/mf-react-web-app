import React from 'react';

import BasketItemsBody from './BasketItemsBody';
import BasketItemsFooter from './BasketItemsFooter';
import menufieldCommon from 'utils/menufield.common';

const BasketItemsTable = ({basket, quantityChange, removeItem, showUnitPrice}) => {
    
    return (
        <table className="table table-condensed item-table">
            <thead>
                <tr>
                    <th>Item</th>
                    {showUnitPrice ? <th>Price</th> : null}
                    <th>Qty</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>            
            { menufieldCommon.sort(basket.items)("uniqueKey").map((item, key) => ( <BasketItemsBody showUnitPrice={showUnitPrice} item={item} key = {key} quantityChange={quantityChange} removeItem={removeItem} /> )) }
            <BasketItemsFooter total={basket.total} showUnitPrice={showUnitPrice} coupon={basket.coupon} />
        </table>
    )
}

export default BasketItemsTable;