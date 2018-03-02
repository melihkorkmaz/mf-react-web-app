import React from 'react';
import sands_1 from '../assets/sands_1.jpg';
import './pages.scss';

const Coupons = props => {

    return <main className="site-main page-spacing" style={{ backgroundColor: "#fff" }}>
        <div className="page-banner container-fluid no-padding" style={{ backgroundImage: "url(" + sands_1 + ")" }}>
            <div className="banner-content">
                <h3>Coupons</h3>
            </div>
        </div>
        <div style={{ minHeight: "300px" }}>
            <section className="container-fluid">
                <div className="container">
                    <p style={{ textAlign: "center" }}>
                        <img src="http://nebula.wsimg.com/68eb8538bd142750b1f0f3c5fe3a73d4?AccessKeyId=309FFB3F2C28AFE71E7E&amp;disposition=0&amp;alloworigin=1" />
                    </p>
                    <p style={{ textAlign: "center" }}>
                        <img src="http://nebula.wsimg.com/a8971e34b1b85dda31b91651b40f7eed?AccessKeyId=309FFB3F2C28AFE71E7E&disposition=0&alloworigin=1" />
                    </p>
                </div>
            </section>
        </div>
    </main>
}

export default Coupons;