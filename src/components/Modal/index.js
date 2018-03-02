import React from 'react'

class Modal extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    show() {
        this.setState({
            isOpen: true
        })
    }

    hide(e) {
        if (e)
            e.preventDefault();

        this.setState({
            isOpen: false
        })
    }

    render() {
        const modalStyle = { display: this.state.isOpen ? 'block' : 'none' };

        const overlayClass = ['overlay']
        if (this.state.isOpen) {
            overlayClass.push('open');
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }


        return (
            <div id="modal">
                <div className="mf-modal" style={modalStyle} onClick={this.hide.bind(this)}>
                    <div className="mf-modal-dialog">
                        {!this.props.hideCloseButton ?
                            (<a className="mf-modal-close" onClick={this.hide.bind(this)}>
                                <i className="fa fa-times"></i>
                            </a>) : null
                        }
                        <div className="mf-modal-content" style={this.props.contentStyle} onClick={(e) => e.stopPropagation()}>
                            {this.state.isOpen ? this.props.children : <div></div>}
                        </div>
                    </div>
                </div>
                <div className={overlayClass.join(' ')}></div>
            </div>
        )
    }
}

export default Modal;