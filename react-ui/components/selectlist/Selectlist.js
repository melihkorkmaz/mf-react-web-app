import React from 'react';
import ReactUI from '../../utils/reactUi';
import ClassName from '../../utils/ClassName'
import './selectlist.scss';

const SelectList = props => {
    const className = new ClassName('rui-form-element', 'rui-select-list');

    const valueKey = props.valueKey || 'value';
    const titleKey = props.titleKey || 'title';
    const source = props.source || [];

    if(props.className)
        className.addClass(...props.className.split(' '));


        const userProps = ReactUI.userProps(props)('className', 'source', 'titleKey', 'valueKey');
    return(
        <select className={className.asString()} {...userProps}>
            { source.map((item, index) => {

                const value = (typeof item !== 'object') ? item : item[valueKey];
                const title = (typeof item !== 'object') ? item : item[titleKey];

                return <option key={index} value={value}>{title}</option>;
            })}
        </select>
    )
}

export default SelectList;