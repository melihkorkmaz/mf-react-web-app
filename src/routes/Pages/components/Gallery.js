import React from 'react';
import gallery_1 from '../assets/galery_1.png';
import gallery_2 from '../assets/galery_2.png';
import gallery_3 from '../assets/galery_3.png';
import gallery_4 from '../assets/galery_4.png';
import gallery_5 from '../assets/galery_5.png';
import gallery_6 from '../assets/galery_6.png';
import gallery_7 from '../assets/galery_7.png';
import gallery_8 from '../assets/galery_8.png';
import gallery_9 from '../assets/galery_9.png';
import gallery_10 from '../assets/galery_10.png';
import sands_1 from '../assets/sands_1.jpg';

import './pages.scss';

const Gallery = props => {
    const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10];
    return <main className="site-main page-spacing" style={{backgroundColor: "#FFF"}}>
        <div className="page-banner container-fluid no-padding" style={{backgroundImage: "url(" + sands_1 + ")"}}>
            <div className="banner-content">
                <h3>Gallery</h3>
            </div>
        </div>
        <section className="container">
            <div className="row">
                {images.map((image, key) => {
                    return <div key={key} className="col-4"><img src={image} /></div>
                })}
            </div>
        </section>
    </main>
}

export default Gallery;