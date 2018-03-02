import React from 'react';


const isHaveDiscount = (discountOptions, addedItems) => {
    if(!discountOptions || discountOptions.length === 0) return false;
    let hasDiscount = false;
    discountOptions.forEach(discount => {
        if(discount.discountType === "free_additions"){

            var relatedItems = addedItems.filter(item => discount.additions.indexOf(item.group) >= 0);

            if(relatedItems.length <= discount.limit)
                hasDiscount = true;

        }
    });

    return hasDiscount;
}

const totalItemPrice = (model, discountOptions) => {
    let price = model.price.value;
    let calculatedPropPriceItems = [];
    price = Object.keys(model.properties).reduce((acc,key) => {
        const current = model.properties[key];
        
        let price = (current.type === "group-checkbox") 
                        ? Object.keys(current).reduce((acc, c) => {
                            if(typeof current[c] === "object" ){
                                calculatedPropPriceItems.push(current[c]);

                                if(isHaveDiscount(discountOptions, calculatedPropPriceItems)){
                                    return acc;
                                }
                            }
                                
                            return typeof current[c] === "object" 
                                ? acc + current[c].selected.priceList ? acc + current[c].selected.priceList.find(x => x.parentPrice === model.price.id).value : acc + current[c].selected.price
                                : acc;
                        }, 0)
                        : current.selected.priceByBasePriceId ? current.selected.priceByBasePriceId[model.price.id] : current.selected.price;

        if(current.type !== "group-checkbox"){
            calculatedPropPriceItems.push(current);
            price = isHaveDiscount(discountOptions, calculatedPropPriceItems) ? 0 : price;
        }
            
        return (current.showByPrice && !current.showByPrice[model.price.id]) ? acc : acc + price;
    }, price);
    
    return price * model.quantity;
};


const defaultPropSelection = (acc, prop) => {
    acc[prop.key] = {
       name : prop.name,
       type : prop.type,
       selected : Object.assign({}, prop.source[0]),
   }
   return acc;
}

const Property = ({title, prop}) => {
    return (<div className="sub-item">
        <b>{title}: </b><span>{prop}</span>
    </div>)
}

const renderProp = properties => {
    return Object.keys(properties).map((key, index) => {
        const prop = (typeof properties[key] === "object") ? Object.keys(properties[key]).join(", ") : properties[key];
        return <Property key={index} title={key} prop={prop} />
    })
}

const UserNote = ({ children }) => {
    return (<div className="sub-item"><b>Note: </b><span>{children}</span></div>)
}

export {
    totalItemPrice,
    defaultPropSelection,
    renderProp,
    UserNote
}