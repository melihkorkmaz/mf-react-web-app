import React from 'react';

const BasketItemsFooter = ({ total, showUnitPrice, coupon }) => {
    return (
        <tfoot>
            <tr>
                <td className="item-table-footer" colSpan={showUnitPrice ? "5" : "4"}>
                    <div className="row">
                        <div className="col-8">
                            Subtotal:
                            </div>
                        <div className="col-4 text-right">
                            {total.subTotal.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Tax:
                            </div>
                        <div className="col-4 text-right">
                            {total.tax.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Delivery Charge:
                            </div>
                        <div className="col-4 text-right">
                            {total.deliveryCharge.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <b>Total:</b>
                        </div>
                        <div className="col-4 text-right">
                            {coupon && coupon.applied ?
                                <strike><b>${coupon.beforeCouponState.total.grandTotal.toFixed(2)}</b></strike> :
                                <b>${total.grandTotal.toFixed(2)}</b>
                            }
                        </div>
                    </div>
                    {coupon && coupon.applied ?
                        <div className="row">
                            <div className="col-8">
                                <b>Total with Coupon:</b>
                            </div>
                            <div className="col-4 text-right">
                                <b>${total.grandTotal.toFixed(2)}</b>
                            </div>
                        </div> : null
                    }
                </td>
            </tr>
        </tfoot>
    )
}

export default BasketItemsFooter;