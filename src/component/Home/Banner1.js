import React from 'react';
import { Link } from 'react-router-dom';

const Banner1 = () => {
    return (
        <div className="relative font-poppins">
            <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                                <br className="hidden md:block" />
                                {' '}
                                <span className="text-[#FF0303]">Hungry Delight</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-white md:text-xl">
                                We are thrilled to have you as our guest. Our team is dedicated to providing you with an unforgettable dining experience that is filled with delicious food, exceptional service, and warm hospitality. Sit back, relax, and let us take care of everything. Thank you for choosing us, and we hope you enjoy your time here!
                                Order Your Favorite Dishes Online and Enjoy a Delicious Meal in the Comfort of Your Own Home.
                            </p>
                            {/* <Link
                                to="/appointment"
                                aria-label=""
                                className="inline-flex items-center  font-xl tracking-wider transition-colors duration-200 text-yellow-500 rounded-lg bg-black px-2 py-2 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Appoint Now
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;