import React from 'react';
import menufieldCommon from '../../utils/menufield.common';

const WorkingHours = ({ restaurant }) => {
    return (
        <aside className="col-md-6 col-sm-6 col-xs-12 ftr-widget hours-widget">
            <h3>working hours</h3>
            <ul>
                {restaurant.workingHours.map((item, index) => {
                    return (<li key={index}>
                        <a href="#">{menufieldCommon.workingHour(item)}</a>
                    </li>)
                })}

            </ul>
        </aside>
    )
}

export default WorkingHours;