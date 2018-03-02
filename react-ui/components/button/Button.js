import React from 'react';
import { Link } from 'react-router';
import ClassName from '../../utils/ClassName';
import ReactUI from '../../utils/reactUi';
import Icon from '../icon/Icon';
import './button.scss';

const Button = (props) => {

    const className = new ClassName('rui-button');
    className.addThemeClass(`rui-button-${props.color || 'default'}`);

    if (props.block)
        className.addClass('rui-blocked');

    if (props.shadow === undefined || props.shadow === "true")
        className.addClass('rui-button-shadow')

    if (props.className)
        className.addClass(...props.className.split(' '));

    const renderAs = props.renderAs || 'button';
    const userProps = ReactUI.userProps(props)('block', 'className', 'shadow', 'renderAs');

    switch (renderAs) {
        case 'button':
            return (
                <button className={className.asString()}  {...userProps}>
                    {props.icon ? <Icon name={props.icon} /> : null} {props.children}
                </button>
            );

        case 'router-link':
            return (
                <Link to={props.to} className={className.asString()} {...userProps}>
                    {props.icon ? <Icon name={props.icon} /> : null} {props.children}
                </Link>
            )
        default:
            return null;
    }
}

export default Button;