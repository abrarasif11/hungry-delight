import React from 'react';
import { Link } from 'react-router-dom';

const Banner3 = () => {
    return (
        <section className="bg-white text-black font-poppins mb-10 mt-20">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/2 ml-4">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

                    <h2 className="text-3xl font-semibold leading-none">Thank you for considering our restaurant</h2>
                    <p className="mt-4 mb-8 text-sm">We would love to hear from you! If you have any questions, comments, or feedback about our food, service, or anything else, please don't hesitate to get in touch.</p>
                    <Link to='/contact'>
                        <button className="self-start px-10 py-3 text-lg  rounded-3xl bg-[#FF8400] font-semibold text-black">Contact Us</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner3;