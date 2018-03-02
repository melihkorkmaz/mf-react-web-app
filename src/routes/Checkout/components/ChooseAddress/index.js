import React from 'react';
import AddressRow from './AddressRow';
import Modal from 'components/Modal'
import NewAddres from './NewAddress';

const ChooseAddress = ({ addresses, selectedAddres, selectAddres, user }) => {

    let modal = {};

    const addNewAddress = (e) => {
        e.preventDefault();
        modal.show();
    }

    const hideModal = () => {
        modal.hide();
    }

    return (
        <div className="card address-panel">
            <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                <span><i aria-hidden="true" className="fa fa-home"></i> Choose Address</span>
                <a href="#" onClick={addNewAddress}>Add New Address</a>
            </div>
            {addresses.length > 0 ?
                <div className="card-body">
                    {addresses.map((address, index) => {
                        return <AddressRow user={user} address={address} key={index} isSelected={selectedAddres && selectedAddres._id === address._id} selectAddres={selectAddres} />
                    })}
                </div> : 
                <div style={{padding: "20px"}}>
                    <button onClick={addNewAddress} className="btn btn-default" style={{margin:"auto", display: "block", cursor: "pointer"}} type="button">ADD NEW ADDRESS FOR DELIVERY!</button>
                </div>
            }

            <Modal ref={(node) => { modal = node }}>
                <NewAddres user={user} hide={hideModal} selectAddres={selectAddres}/>
            </Modal>
        </div>
    )
}

export default ChooseAddress;