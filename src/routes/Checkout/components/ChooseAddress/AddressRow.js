import React from 'react';
import { connect } from 'react-redux';
import { removeAddress } from 'store/user.reducer';
import httpProvider from 'utils/http.provider';

class AddressRow extends React.PureComponent {

    removeAddress(id, e) {
        e.preventDefault();
        e.stopPropagation();

        if (confirm('Do you want to remove your address?')) {
            httpProvider.delete('/users/me/address/' + id)
                .then(x => x.data)
                .then(x => {
                    if (x.status) {
                        this.props.removeAddress(id);
                        this.props.selectAddres();
                    }
                })

        }
    }

    render() {
        const { isSelected, address, selectAddres } = this.props;
        return (
            <div className={isSelected ? "selected" : ""} onClick={() => selectAddres(address)}>
                <div>
                    <div>
                        <b>{address.title}</b>
                    </div>
                    <div>{address.googleFormatted}</div>
                    <div>{address.note}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div>{address.phone}</div>
                    <div>{address.email}</div>
                    <div><a href="#" onClick={this.removeAddress.bind(this, address._id)} style={{ color: "red" }}>Remove</a></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAddress: (_id) => { dispatch(removeAddress(_id)) }
    }
}


export default connect(null, mapDispatchToProps)(AddressRow);