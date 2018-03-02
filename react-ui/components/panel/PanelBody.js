import React from 'react';
import ReactDOM from 'react-dom';
import ClassName from '../../utils/ClassName';
import ShowHideHOC from '../hocs/ShowHideHOC';
import './panel.scss';

class PanelBody extends React.PureComponent {

    componentWillMount() {
        this.className = new ClassName();
    }

    componentDidMount(){
        const panelBody = ReactDOM.findDOMNode(this);
        const panelContent = ReactDOM.findDOMNode(this.refs.panelContent);
        setTimeout(() => {
            panelBody.style.height = panelContent.getBoundingClientRect().height + "px";
        }, 0);
    }

    hide(){
        const panelBody = ReactDOM.findDOMNode(this);
        const panelContent = ReactDOM.findDOMNode(this.refs.panelContent);
        panelBody.style.height = "0px";
        
        setTimeout(() => {
            this.props.hide();
        }, 200);
    }

    render() {
        this.className.clear();
        this.className.addClass('rui-panel-body');
        return (<div className={this.className.asString()}>
            <div ref="panelContent" className="rui-panel-body-content" style={this.props.style}>
                {this.props.children}
            </div>
        </div>)
    }
}



export default ShowHideHOC(PanelBody);