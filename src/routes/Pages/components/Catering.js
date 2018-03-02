import React from 'react';
import './pages.scss';
import CateringImage from '../assets/catering.jpg';
import Catering_1 from '../assets/catering_1.png';
import Catering_2 from '../assets/catering_2.png';
import Catering_3 from '../assets/catering_3.png';
import Catering_4 from '../assets/catering_4.png';
import Catering_5 from '../assets/catering_5.png';
import { Button } from '../../../../react-ui';
const Catering = props => {

    return <main className="site-main page-spacing">
        <div className="page-banner container-fluid no-padding" style={{ backgroundImage: 'url(' + CateringImage + ')' }}>
            <div className="banner-content">
                <h3>Catering</h3>
            </div>
        </div>
        <section className="container-fluid" style={{ backgroundColor: "#fff" }}>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-5 section-left-content">
                        <img alt="about" src={Catering_1} />
                    </div>
                    <div className="col-7 section-right-content">
                        <div className="section-header left-header">
                            <h3>Mobile Wood Fired Pizza</h3>
                            <h5>We bring the pizza to the people</h5>
                        </div>
                        <div className="section-content">
                            Our mobile wood fired oven is the perfect way to bring a group together for a high quality catering event. We are perfect for private parties, block parties, rehearsal dinners, birthday parties, corporate lunches, graduations, networking events, festivals
                        and your favorite sports tournaments
                        <div style={{ marginTop: "20px", textAlign: "right" }}>
                                <Button color="primary">BOOK NOW!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container-fluid" style={{ borderTop: "1px solid #d2d2d2", borderBottom: "1px solid #d2d2d2" }}>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="section-header left-header">
                            <h3>Build Your Own Pizza</h3>
                            <h5></h5>
                        </div>
                        <div className="section-content" style={{ fontWeight: 600, fontSize: "18px" }}>
                            Bacon, Basil, Black Olives, Broccoli, Chicken, Clams, Cherry Peppers, Eggplant, Feta Cheese, Fresh Mozzarella, Fresh Tomato, Garlic, Green Peppers, Ham, Jalapeños, Meatballs, Mushroom, Onion, Pepperoni, Pineapple, Ricotta, Sausage, Spinach, Shrimp
                    </div>
                    </div>
                    <div className="col-5">
                        <img alt="about" src={Catering_2} />
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid" style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
                <div className="col-12">
                    <div className="section-header">
                        <h3>Enjoy Our Specialty Pizzas</h3>
                        <h5>What is your favorite beach?</h5>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            <div className="col-3" style={{ fontSize: "15px" }}>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Italian White</b><br /> Mozzarella, parmesan, ricotta &amp; olive oil
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Greek White</b><br /> Mozzarella, feta, tomatoes, oregano &amp; olive oil
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Margarita (white)</b><br /> Sliced tomatoes, garlic, olive oil, mozzarella &amp; romano cheese, fresh basil
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Buffalo Chicken</b><br /> White or red. Our traditional pie topped with spicy buffalo chicken with blue cheese dressing on the side
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>BBQ Chicken</b><br /> White pizza topped with BBQ grilled chicken
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Italian White with Broccoli or Spinach</b><br /> ....
                                </div>
                            </div>
                            <div className="col-md-6" style={{ textAlign: "center" }}>
                                <img src="http://premiumlayers.net/demo/html/pizzakitchen/images/services.png" style={{ marginTop: "25px" }} />

                            </div>
                            <div className="col-3" style={{ textAlign: "right", fontSize: "15px" }}>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>White Clam Casino</b><br /> White pizza with clams, bacon, fresh garlic &amp; olive oil
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Chicken Parm</b><br /> Tomato sauce, diced chicken cutlet &amp; mozzarella
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Point Beach</b><br /> Mashed potato, bacon with cheddar &amp; mozzarella cheese (white)
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Trumbull Beach</b><br /> Sausage, meatball, pepperoni, ham, bacon &amp; mozzarella (red)
                                </div>
                                <div style={{ paddingBottom: "15px" }}>
                                    <b style={{ color: "#2ca9df", fontSize: "18px" }}>Myrtle Beach</b><br /> Chicken cutlet, bacon, oregano, ranch dressing &amp; extra mozzarella cheese (red)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
        </section>
        <section className="container-fluid" style={{ borderTop: "1px solid #d2d2d2", borderBottom: "1px solid #d2d2d2" }}>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="section-header left-header">
                            <h3>Appetizers</h3>
                            <h5></h5>
                        </div>
                        <div className="section-content" style={{ fontSize: "15px" }}>
                            <div className="row">
                                <div className="col-8"></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Small</b></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Large</b></div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Buffalo Wings</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>69.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Boneless Wings</div>
                                <div className="col-2" style={{ textAlign: "center" }}>37.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>64.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Fried Calamari</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>71.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Spanakopita or Tyropits</div>
                                <div className="col-2" style={{ textAlign: "center" }}>32.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>57.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Meatball or Sausage</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>69.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Fried Mozzarella</div>
                                <div className="col-2" style={{ textAlign: "center" }}>34.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>62.99</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img alt="about" src={Catering_3} />
                    </div>

                </div>
            </div>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
        </section>

        <section className="container-fluid" style={{ backgroundColor: "#fff" }}>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img alt="about" src={Catering_4} />
                    </div>

                    <div className="col-7">
                        <div className="section-header left-header">
                            <h3>Pasta</h3>
                        </div>
                        <div className="section-content" style={{ fontSize: "15px" }}>
                            <div className="row">
                                <div className="col-8"></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Small</b></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Large</b></div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Choice of your pasta with sauce</div>
                                <div className="col-2" style={{ textAlign: "center" }}>29.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>49.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Baked Ziti</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>59.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Cheese Ravioli</div>
                                <div className="col-2" style={{ textAlign: "center" }}>37.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>51.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Tortellini Alfredo<br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Cheese Tortellini topped with thick, rich cream sauce</span>
                                </div>
                                <div className="col-2" style={{ textAlign: "center" }}>44.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>64.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Penne Alla Vodka</div>
                                <div className="col-2" style={{ textAlign: "center" }}>44.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>64.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Penne Con Broccoli<br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Penne pasta &amp; broccoli tossed with garlic &amp; oil</span>
                                </div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>51.99</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <h3 style={{ color: "#f0ad4e", fontFamily: "'Yellowtail', cursive", fontSize: "30px", letterSpacing: "0.8px", textAlign: "center" }}>Pasta Entrees</h3>
                            <h5 style={{ fontWeight: 600, textAlign: "center", fontSize: "14px" }}>Small Tray $49.99 • Large Tray $79.99</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    Lasagna <br />Sausage &amp; Peppers <br />Chicken Florentine <br />Chicken Parmigiana <br />Chicken Marsala
                                </div>
                                <div className="col-md-6" style={{ textAlign: "center", fontWeight: 600, fontSize: "14px" }}>
                                    SMALL TRAYS<br />SERVES 8-10 PEOPLE <br /><br /> LARGE TRAYS<br />SERVES 15-20 PEOPLE
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ borderLeft: "1px solid #cacaca", borderRight: "1px solid #cacaca" }}>
                            <h3 style={{ color: "#f0ad4e", fontFamily: "'Yellowtail', cursive", fontSize: "30px", letterSpacing: "0.8px", textAlign: "center" }}>Sandwich Platters</h3>
                            <div className="row">
                                <div className="col-8"></div>
                                <div className="col-md-2" style={{ textAlign: "center" }}><b>Small</b></div>
                                <div className="col-md-2" style={{ textAlign: "center" }}><b>Large</b></div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Platter of Assorted Subs &amp; Wraps<br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Choice of grilled chicken, tuna fish, turkey, chicken cutlet or ham &amp; cheese</span>
                                </div>
                                <div className="col-md-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-md-2" style={{ textAlign: "center" }}>74.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Grinders<br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Choice of meatball, sausage, chicken or eggplant parmigian</span>
                                </div>
                                <div className="col-md-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-md-2" style={{ textAlign: "center" }}>74.99</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{ color: "#f0ad4e", fontFamily: "'Yellowtail', cursive", fontSize: "30px", letterSpacing: "0.8px", textAlign: "center" }}>Breads</h3>
                            <h5 style={{ fontWeight: 600, textAlign: "center", fontSize: "14px" }}>Small Tray $19.95 • Large Tray $29.95</h5>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-md-12"><b>Bread Sticks</b><br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Served with dipping sauce</span>
                                </div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-md-12"><b>Pita</b><br />
                                    <span style={{ fontSize: "11px", fontStyle: "italic" }}>Served with Tzatziki sauce and/or hummus</span>
                                </div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-md-12"><b>Garlic Knots or Garlic Bread</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
        </section>
        <section className="container-fluid" style={{ borderTop: "1px solid #d2d2d2", borderBottom: "1px solid #d2d2d2" }}>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="section-header left-header">
                            <h3>Salads</h3>
                            <h5></h5>
                        </div>
                        <div className="section-content" style={{ fontSize: "15px" }}>
                            <div className="row">
                                <div className="col-8"></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Small</b></div>
                                <div className="col-2" style={{ textAlign: "center" }}><b>Large</b></div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Buffalo Wings</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>69.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Boneless Wings</div>
                                <div className="col-2" style={{ textAlign: "center" }}>37.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>64.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Fried Calamari</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>71.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Spanakopita or Tyropits</div>
                                <div className="col-2" style={{ textAlign: "center" }}>32.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>57.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Meatball or Sausage</div>
                                <div className="col-2" style={{ textAlign: "center" }}>39.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>69.99</div>
                            </div>
                            <div className="row" style={{ paddingBottom: "5px" }}>
                                <div className="col-8">Fried Mozzarella</div>
                                <div className="col-2" style={{ textAlign: "center" }}>34.99</div>
                                <div className="col-2" style={{ textAlign: "center" }}>62.99</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img alt="about" src={Catering_5} />
                    </div>
                </div>
            </div>
            <div className="section-padding" style={{ paddingBottom: "20px", paddingTop: "20px" }}></div>
        </section>
    </main>
}

export default Catering;