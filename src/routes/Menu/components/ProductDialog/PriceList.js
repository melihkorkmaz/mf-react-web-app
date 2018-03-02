import React from 'react';


const PriceList = ({ priceSelected, priceList, selected }) =>
    priceList.length > 1 ?
        (
            <div className="price-list-options">
                <select className="form-control" onChange={(e) => priceSelected(priceList, e)} value={priceList.indexOf(selected)}>
                    {
                        priceList.map((item, index) => {
                            return (
                                <option value={index} key={index}>{item.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        ) : null


export default PriceList;