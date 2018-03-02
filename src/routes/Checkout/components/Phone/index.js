import React from 'react';

const Phone = ({phone, onPhoneChange}) => {
    return (
        <div className="card note-panel">
            <div className="card-header">
                <i aria-hidden="true" className="fa fa-phone"></i> Phone Number
        </div>
            <div className="card-body" style={{padding: "10px"}}>
                <input type="text" placeholder="Write your phone" className="form-control" value={phone} onChange={onPhoneChange} />
            </div>
        </div>
    )
}

export default Phone;