import React from "react";
import Layout from "./../components/Layout/Layout";
import './About.css';

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6  ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%", display: "flex", justifyContent: "center" }}
                    />

                </div>
                <div className="col-md-4">
                    <div>
                        <h1 class="heading">ABOUT US</h1>
                        <p class="text-justify mt-2">
                            Mobishop is today an e-commerce platform which enables third-party sellers to sell their products to customers using the platform. Collective experience of our team members and the years we have spent in the business allowed us to develop a vast network of partners, ensuring that our customers will always find what they are looking for. This also means that we are able to offer <mark>great prices</mark>, which are constantly being updated and follow the shifts in the market.

                            Our <mark>affordability</mark>, <mark>fast</mark> and <mark>reliable delivery</mark>, and the fact that you will always be able to find the product that you are looking for in our offer, have made us stand out in the market. We are constantly improving our services so we are trying to keep in close touch with our customers and listen to their suggestions and critiques. This is why our customer service, which is always there to answer any question that you may have, is just as willing to listen as it is to inform.
                        </p>
                    </div>


                </div>
            </div>

        </Layout>
    );
};

export default About;