import React from 'react';

const Label = ({name, price, htmlForKey, customClassName= "col-sm-4" }) => (
    <label htmlFor={htmlForKey} className={`control-label ${customClassName}`} style={{ paddingTop: "0px", marginLeft : "0px" }}>{name}
        { (price && price > 0) ? <span> (${price})</span> : null }
    </label>
)

export default Label;