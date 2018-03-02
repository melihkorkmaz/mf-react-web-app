import React from 'react';
import ReactUI from '../../utils/reactUi';
import ClassName from '../../utils/ClassName';

const Icon = props=> {
    const className = new ClassName("fa", props.name);

    if (props.className)
        className.addClass(...props.className.split(' '));

    const userProps = ReactUI.userProps(props)('className');
    return(
        <i className={className.asString()} {...userProps}></i>
    )
}

export default Icon;