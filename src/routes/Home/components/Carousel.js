import React from 'react';
import SliderOne from '../assets/slider1.jpg'
import SliderTwo from '../assets/slider2.jpg'

class Carousel extends React.PureComponent {

    render() {
        return (
            <div className="photo-slider container-fluid no-padding hidden-xs hidden-sm">
                <div className="carousel slide carousel-fade" data-ride="carousel" id="main-carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item">
                            <img alt='' src={SliderOne} />
                            <div className="carousel-caption">
                                <h3>Pizza makes me think that anything is possible</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Carousel;