import React from 'react';
import './Contact.css';

import phoneImg from './image/phone-call.png';
import emailImg from './image/email.png';

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact">
                <div className="contact-container" >

                    <div className="contact-info">
                        <div className="info phone">
                            <div className="info-header">
                                <img src={phoneImg} />
                                {/* <h1>Phone: </h1> */}
                                <div className="info-text"><h1>Phone: </h1></div>
                            </div>
                            <h1>+60-183703393</h1>
                        </div>
                        <div className="info email">
                            <div className="info-header">
                                <img src={emailImg} />
                                <div className="info-text"><h1>Email: </h1></div>
                            </div>
                        </div>
                    </div>

                <div className="contact-email">
                    halo
                </div>


                </div>
                
            </div>

            {/* <div className="contact">
                <div className="contact-container">
                    <div className="contact-info-item">
                        <div className="icon"><i class="fa fa-envelope"></i></div>
                        <h4>Email</h4>
                        <p>zihenglim0710@gmail.com</p>
                    </div>

                    <div className="contact-info-item">
                        <div className="icon"><i class="fa fa-phone"></i></div>
                        <h4>Phone</h4>
                        <p>+60 183703393</p>
                    </div>

                </div>
                <h3>Phone Number: +60 18-370 3393</h3>
                <h3>Email: zihenglim0710@gmail.com</h3>



                <h3>SEND ME AN EMAIL</h3>

                <div className="contact-form-row">
                    <div className="contact-form">
                        <div className="contact-form-row">

                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>

                            <div className="form-item col-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>


                        </div>


                        <div className="contact-form-row">

                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>

                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                </div>
                            </div>

                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <button type="submit" className="email-submit-btn">Send Message</button>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div> */}
        </section>
    );
}