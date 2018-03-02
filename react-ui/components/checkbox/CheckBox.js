import React from 'react';
import ClassName from '../../utils/ClassName';

import './checkbox.scss';

const CheckBox = (props) => {

    const className = new ClassName('rui-checkbox-container', props.size);
    className.addThemeClass(`rui-checkbox-${props.color || 'default'}`);

    if(props.className)
        className.addClass(...props.className.split(' '));

    return (
        <label className={className.asString()} style={props.style}>
            {props.label}
            <input type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange}/>
            <span className="rui-checkmark"></span>
        </label>
    )
}

export default CheckBox;