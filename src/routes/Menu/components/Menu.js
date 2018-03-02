import React from 'react'
import MenuGroup from './MenuGroup'
import { connect } from 'react-redux';

import menufieldCommon from '../../../utils/menufield.common'
import { initRestaurant } from '../../../store/restaurant.reducer';
import Modal from '../../../components/Modal'
import ProductDialog from './ProductDialog'

import { Button, Dialog, SelectList, TextArea } from '../../../../react-ui';

class Menu extends React.PureComponent {

    constructor(){
        super();
        this.state = {
            modalProduct : {}
        }
    }

    componentDidMount(){

    }

    showModal(product){
        if(!this.dialog) return;
        
        this.setState({
            modalProduct : product
        });
        this.dialog.show();
    }
    
    hideModal(){
        this.dialog.hide();
    }

    render() {
        
        const { menu } = this.props;

        return (
            <div className="menu">
                <Dialog ref={dialog => this.dialog = dialog} size="600px">
                    <ProductDialog product={this.state.modalProduct} onHideModal={this.hideModal.bind(this)} />
                </Dialog>
                {menufieldCommon.orderASC(menu.groups).map((item, index) => {
                    return <MenuGroup key={item._id} group={item} onModalShow={this.showModal.bind(this)} />
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initRestaurant : () => dispatch(initRestaurant())
    }
}
export default connect(undefined, mapDispatchToProps)(Menu);