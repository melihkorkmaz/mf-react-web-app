import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import menufieldCommon from 'utils/menufield.common';

const SCHEDULED = "SCHEDULED";
const NOW = "NOW";

const TimeSelect = ({ restaurant, expectedTime, scheduled, onChangeExpectedTime, onChangeScheduled, carryOrDelivery, deliveryDuration }) => {

    const minTime = () => {
        return menufieldCommon.restaurantOpening(restaurant)(moment(scheduled));
    }

    const maxTime = () => {
        return menufieldCommon.restaurantClosing(restaurant)(moment(scheduled));
    }

    return (
        <div className="card time-panel">
            <div className="card-header">
                <i aria-hidden="true" className="fa fa-clock-o"></i> {carryOrDelivery === "DELIVERY" ? "Delivery" : "Carry Out"} Time
        </div>
            <div className="card-body">
                <div className={expectedTime === NOW ? "selected" : ""} onClick={() => onChangeExpectedTime(NOW)}>
                    <div className="radio">
                        <input name="timeSelect" type="radio" checked={expectedTime === NOW} onChange={() => onChangeExpectedTime(NOW)} />
                        <span>Now (~{deliveryDuration} minutes)</span>
                    </div>
                </div>
                <div className={expectedTime === SCHEDULED ? "selected" : ""} onClick={() => onChangeExpectedTime(SCHEDULED)}>
                    <div className="radio">
                        <input name="timeSelect" type="radio" checked={expectedTime === SCHEDULED} onChange={() => onChangeExpectedTime(SCHEDULED)} />
                        <span>Scheduled </span>
                        <span style={{ fontSize: '11px' }}>(For future order.)</span>
                        <div className="date-container" style={{ display: expectedTime === SCHEDULED ? "block" : "none" }}>
                            <DatePicker selected={scheduled}
                                onChange={onChangeScheduled}
                                className="form-control"
                                minTime={minTime()}
                                maxTime={maxTime()}
                                showTimeSelect dateFormat="LLL"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeSelect;