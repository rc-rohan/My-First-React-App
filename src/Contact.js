import React from 'react';
import InputField from './InputField';

const Contact = () => (
    <section className="page-section" id="contact">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                Contact Me
            </h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <form
                        id="contactForm"
                        name="sentMessage"
                        novalidate="novalidate"
                    >
                        <InputField
                            label={"Name"}
                            fieldId={"name"}
                            fieldType={"text"}
                            placeholder={"Name"}
                            dataValidationMessage={"Please enter your name."}
                        />
                        <InputField
                            label={"Email Address"}
                            fieldId={"email"}
                            fieldType={"email"}
                            placeholder={"Email Address"}
                            dataValidationMessage={"Please enter your email address."}
                        />
                        <InputField
                            label={"Phone Number"}
                            fieldId={"phone"}
                            fieldType={"tel"}
                            placeholder={"Phone Number"}
                            dataValidationMessage={"Please enter your phone number."}
                        />
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter a message."
                                ></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-xl"
                                id="sendMessageButton"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;