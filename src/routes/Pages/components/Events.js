import React from 'react';
import event_1 from '../assets/event_1.jpg';

import './pages.scss';

const Events = props => {
    return <main className="site-main page-spacing" style={{backgroundColor: "#fff"}}>
        <div className="page-banner container-fluid no-padding" style={{ backgroundImage: "url(" + event_1 + ")" }}>
            <div className="banner-content">
                <h3>Events</h3>
            </div>
        </div>

        <div className="container" style={{textAlign: "center"}}>
            <div className="section-padding" style={{paddingBottom:"20px", paddingTop:"20px"}}></div>
            <h2>Every Monday  WE ARE @  Stratford Farmers Market between 2:30 to 5:30 pm</h2>

            <div className="section-padding" style={{paddingBottom:"20px", paddingTop:"20px"}}></div>
            <h2>Every Thursday  WE ARE @ Trumbull Farmers Market 3:30 to 6:30 pm</h2>
            <div className="section-padding" style={{paddingBottom:"20px", paddingTop:"20px"}}></div>
        </div>
    </main>
}

export default Events;