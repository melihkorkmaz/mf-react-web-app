import React from 'react';
import ReactUI from '../../utils/reactUi';
import ClassName from '../../utils/ClassName';

const TextArea = props => {
    
    const className = new ClassName('rui-form-element', 'rui-text-area');

    if(props.className)
        className.addClass(...props.className.splite(' '));

    const userProps = ReactUI.userProps(props)('className');

    return (
        <textarea className={className.asString()} {...userProps}>{props.children}</textarea>
    )
}

export default TextArea;