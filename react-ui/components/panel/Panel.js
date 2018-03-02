import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import ClassName from '../../utils/ClassName';
import PanelHeader from './PanelHeader';
import PanelBody from './PanelBody';
import ReactUI from '../../utils/reactUi';
import './panel.scss';

class Panel extends React.PureComponent {

    setClasses() {
        this.className.clear();
        this.className.addClass('rui-panel');
        this.className.addThemeClass(`rui-panel-${this.props.color || 'default'}`);
        this.className.addClass(this.props.className);

    }

    componentWillMount() {
        this.className = new ClassName();
    }

    onHeaderClick() {
        this.refs.panelBody.hide();
    }

    render() {
        this.setClasses();

        this.childrenWithProps = React.Children.map(this.props.children, child => {
            const childProps = { color: child.props.color || this.props.color, collapsable: this.props.collapsable, open: this.props.open === "false" ? false : true };

            if (child.type === PanelHeader) {
                if (this.props.collapsable)
                    childProps.onHeaderClick = this.onHeaderClick.bind(this);
                return React.cloneElement(child, childProps);
            }
            else if (child.type === PanelBody){
                return React.cloneElement(child, {
                    ref: 'panelBody',
                    onShow : () => {
                        ReactDOM.findDOMNode(this).classList.add('open')
                    },
                    onHide : () => {
                        ReactDOM.findDOMNode(this).classList.remove('open')
                    },
                    ...childProps
                });
            }
            else
                throw new Error('RUI Panels can have only PanelHeader and PanelBody as a child!');
        });

        if(this.props.open === "true" || this.props.open === undefined)
            this.className.addClass('open');
            
        const userProps = ReactUI.userProps(this.props)('collapsable', 'className', 'open');

        return <div className={this.className.asString()} {...userProps}>
            {this.childrenWithProps}
        </div>
    }
}


export default Panel;