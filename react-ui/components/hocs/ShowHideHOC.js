import React from 'react';

const showHideHOC = (WrappedComponent) => {

    return class ShowHideHOC extends React.Component {

        state = {
            isVisible: this.props.open || false
        }

        show() {
            if(this.props.onShow) 
                this.props.onShow();
            this.setState({
                isVisible: true
            });
        }

        hide(){
            if(this.refs.child)
                this.refs.child.hide();
            else
                this.show();
        }

        _hide(){

            if(this.props.onHide) 
                this.props.onHide();

            this.setState({
                isVisible : false
            })
        }

        render() {

            return this.state.isVisible ? <WrappedComponent hide={this._hide.bind(this)} ref="child" {...this.props} /> : null;
        }
    }
}

export default showHideHOC;