import React from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import menufieldCommon from 'utils/menufield.common';
import httpProvider from 'utils/http.provider';
import axios from 'axios';
import config from '../../../../config';

import { addAddress } from 'store/user.reducer';


class NewAddress extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addressSearch: '',
            title: '',
            googleFormatted: '',
            city: '',
            placeId: '',
            route: '',
            province: '',
            streetNumber: '',
            zip: '',
            phone: '',
            email: '',
            note: '',
            hasError: false
        }
    }

    onAddressSearch(address) {
        this.setState({
            addressSearch: address
        });
    }


    googleAddressFormatter(response) {
        return new Promise((resolve, reject) => {
            const item = response[0];
            getLatLng(item).then(latLng => {
                resolve({
                    googleFormatted: item.formatted_address,
                    placeId: item.place_id,
                    lat: latLng.lat,
                    lng: latLng.lng,
                    ...menufieldCommon.googleAddress(item.address_components)
                });
            })
        })

    }

    onAddressSelect(address) {
        this.setState({
            addressSearch: address
        });

        geocodeByAddress(this.state.addressSearch)
            .then((response) => this.googleAddressFormatter(response))
            .then(fotmatted => this.setState({
                ...fotmatted
            }, err => console.log("error", err)));
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (!this.state.placeId || this.state.placeId === "") {
            this.setState({
                hasError: true,
                error: "Please select an address"
            })

            return;
        }

        let hasError = false;
        Object.keys(this.state).forEach(x => {
            if ((x === "title" || x === "email" || x == "phone") && this.state[x] === "") {
                hasError = true;
            }
        })

        if (hasError) {
            this.setState({ hasError: true, error: 'Please fill required fields. (title, phone, email)' })
            return;
        } else {
            let model = Object.assign({}, { ...this.state })

            this.setState({
                hasError: false,
            });

            delete model.hasError;
            delete model.error;
            delete model.addressSearch;

            const self = this;
            self.props.hide();

            axios(`${config.api}/users/me/address`, {
                method: 'POST',
                // data: model,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-source': 'web-app',
                    'x-access-token': localStorage.getItem("token")
                }
            })
                .then((response) => response.data)
                .then(x => {
                        self.props.addAddress(x.data);
                        self.props.selectAddres(x.data);
                }, err => reject(err));

            // httpProvider.post('/users/me/address')(model)
            // .then(x => x.data)
            // .then(x => {
            //     self.props.addAddress(x.data);
            //     self.props.selectAddres(x.data);
            // })
        }
    }

    render() {
        const inputProps = {
            value: this.state.addressSearch,
            onChange: this.onAddressSearch.bind(this),
        };

        const cssClasses = {
            input: 'form-control'
        };

        return (
            <div className="product-dialog">
                <h4>Add New Address</h4>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Address Title *</label>
                        <input type="text" className="form-control" placeholder="My home, work etc." value={this.state.name} name="title" onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search And Select Your Address</label>
                        <PlacesAutocomplete onSelect={this.onAddressSelect.bind(this)} onEnterKeyDown={this.onAddressSelect.bind(this)} classNames={cssClasses} inputProps={inputProps} />
                        {/* <input type="text" className="form-control" placeholder="Search for your address." autocapitalize="off" autocorrect="off" spellcheck="off" autocomplete="off" /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">City, State, Zip</label>
                        <div style={{ display: "flex" }}>
                            <input type="text" className="form-control" placeholder="" style={{ marginRight: "10px" }} value={this.state.city} disabled />
                            <input type="text" className="form-control" placeholder="" style={{ marginRight: "10px" }} value={this.state.province} disabled />
                            <input type="text" className="form-control" placeholder="" value={this.state.zip} disabled />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Address Line</label>
                        <input type="text" className="form-control" value={this.state.googleFormatted} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone *</label>
                        <input type="text" className="form-control" placeholder="Mobile Phone" value={this.state.phone} name="phone" onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">E-Mail *</label>
                        <input type="text" className="form-control" placeholder="E-Mail" value={this.state.email} name="email" onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Note</label>
                        <textarea className="form-control" value={this.state.note} name="note" onChange={this.onInputChange.bind(this)}>
                        </textarea>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>

                        {this.state.hasError ?
                            (<span style={{ color: "red", }}>{this.state.error}</span>) : ""
                        }

                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAddress: (address) => dispatch(addAddress(address))
    }
}

export default connect(null, mapDispatchToProps)(NewAddress);