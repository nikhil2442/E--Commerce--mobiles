import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from "./../components/Layout/Layout";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <div className="contactus" style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="/images/contactus.jpeg"
                            alt="contactus"
                            style={{ width: "70%" }}
                        />
                    </div>

                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">24/7 SUPPORT</h1>
                    <p className="text-justify mt-2">
                        Our dedicated support team is here for you 24/7, ready to assist with any inquiries you may have."Your feedback matters to us, so don't hesitate to let us know how we can serve you better. Experience hassle-free support that's tailored to your needs with us!"
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : mobishop@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 9515169117
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;