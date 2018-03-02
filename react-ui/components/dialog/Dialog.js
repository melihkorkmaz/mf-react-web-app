import React from 'react';
import ReactDOM from 'react-dom';
import ClassName from '../../utils/ClassName';
import ShowHideHOC from '../hocs/ShowHideHOC';
import Icon from '../icon/Icon';

import './dialog.scss';
class Dialog extends React.PureComponent {

    componentWillMount() {
        this.backdropClassName = new ClassName('rui-dialog-backdrop');
        this.dialogContentClassName = new ClassName('rui-dialog-content');
        const size = (this.props.size || 'medium').toLowerCase();

        if (['medium', 'small', 'large', 'full-screen'].indexOf(size) >= 0)
            this.dialogContentClassName.addClass(size);
        else
            this.contentStyle = { width: size };
    }

    componentDidMount() {
        setTimeout(() => {
            const backdrop = ReactDOM.findDOMNode(this.refs.backdrop);
            const content = ReactDOM.findDOMNode(this.refs.content);
            backdrop.classList.add('open');
            content.classList.add('open');
            document.body.style.overflowY = "hidden";
        }, 0);
    }

    hide() {
        const backdrop = ReactDOM.findDOMNode(this.refs.backdrop);
        const content = ReactDOM.findDOMNode(this.refs.content);
        backdrop.classList.remove('open');
        content.classList.remove('open');
        document.body.style.overflowY = "auto";
        
        setTimeout(() => {
            this.props.hide();
        }, 200);
    }

    render() {

        return (
            <div className='rui-dialog-container'>
                <div className="rui-dialog" onClick={this.hide.bind(this)}>
                    <div ref="content" className={this.dialogContentClassName.asString()} onClick={(e) => e.stopPropagation()} style={this.contentStyle}>
                        <Icon name="fa fa-times" className="close-btn" onClick={this.hide.bind(this)} />
                        {this.props.children}
                    </div>
                </div>
                <div ref="backdrop" className={this.backdropClassName.asString()}></div>
            </div>
        )
    }
}


export default ShowHideHOC(Dialog);