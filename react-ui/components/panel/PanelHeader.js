import React from 'react';
import ClassName from '../../utils/ClassName';
import Icon from '../icon/Icon';

import './panel.scss';

const PanelHeader = props => {
    const className = new ClassName('rui-panel-header');
    className.addThemeClass(`rui-panel-header-${props.color || 'default'}`);

    const style = {
        cursor : props.collapsable === true ? 'pointer' : 'default'
    }

    return (
    <div className={className.asString()} style={style} onClick={props.onHeaderClick}>
        {props.children}
         {props.collapsable === true ?
            <Icon name="fa-chevron-right" className="rui-collapse-icon" />
            : null}
    </div>)
}

export default PanelHeader;