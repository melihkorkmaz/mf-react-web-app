import React from 'react';
import sands_1 from '../assets/sands_1.jpg';
import { Button, Icon } from '../../../../react-ui';
import './pages.scss';

const ContactUs = props => {
    return <main className="site-main page-spacing">
        <div className="page-banner container-fluid no-padding" style={{ backgroundImage: "url(" + sands_1 + ")" }}>
            <div className="banner-content">
                <h3>Contact Us</h3>
            </div>
        </div>
        <section className="contact-us container-fluid no-padding">
            <div className="section-padding"></div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="contact-content">
                            <Icon name="fa fa-home" />
                            <h3>visit Us</h3>
                            <p>415 Boston Post Rd, Milford, CT 06460</p>
                        </div>

                        <div className="contact-content">
                        <Icon name="fa fa-envelope-o" />
                            <h3>Email Us</h3>
                            <p><a href="mailto:silversandspizza@gmail.com" title="silversandspizza@gmail.com">silversandspizza@gmail.com</a></p>
                        </div>

                        <div className="contact-content">
                        <Icon name="fa fa-phone" />
                            <h3>Call Us</h3>
                            <p><a href="tel:(203) 882-0220" title="(203) 882-0220">(203) 882-0220</a></p>
                        </div>
                    </div>
                    <div className="col-7">
                        <form className="contact-form">
                            <div className="form-group">
                                <input className="form-control"  placeholder="Your Name *" type="text" />
                            </div>
                            <div className="form-group">
                                <input className="form-control"  placeholder="Your E-mail *" type="email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control"  placeholder="Your Phone Number *" type="text" />
                            </div>
                            <div className="form-group">
                                <input className="form-control"  placeholder="Subject *" type="text" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message *" rows="5" ></textarea>
                            </div>
                            <div className="form-group">
                                <span style={{ color: "red", fontSize: "11px", fontStyle: "italic" }}>* Please fill all fields to send a message!</span>
                                <Button color="primary" className="pull-right">Send</Button>
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="section-padding"></div>
        </section>
    </main>
}

export default ContactUs;