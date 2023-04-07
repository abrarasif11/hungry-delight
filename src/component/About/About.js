import React from 'react';

const About = () => {
    return (
        <section className="bg-white text-black font-poppins">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">About Hungry Delight</h2>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FF8400] dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">At our restaurant, we're passionate about serving delicious food made from the freshest ingredients. Our menu is carefully crafted to satisfy every palate and we're committed to providing an unforgettable dining experience for every guest.</h4>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FF8400] dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Hungry is more than just a restaurant - it's a celebration of good food, good company, and good times. We've been serving up culinary delights for [number of years] years and we're proud to be a part of the community.</h4>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FF8400] dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Our mission at Hungry Delight is simple - to provide our guests with exceptional cuisine and outstanding service. From our farm-to-table ingredients to our expertly crafted cocktails, we strive for excellence in every aspect of our business.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="https://images.unsplash.com/photo-1542444256-164bd32f11fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">RECOGNITION</h3>
                            <div className="mt-2 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Restaurant recognition refers to the process of acknowledging and rewarding exceptional restaurants for their outstanding performance in areas such as cuisine, service, ambiance, and overall dining experience. These recognitions can be bestowed by various entities such as restaurant guides, award programs, critics, and customer reviews. A restaurant's recognition can significantly impact its reputation, popularity, and business success, as it serves as a seal of approval from the industry and the public. On an about page, a restaurant may highlight any recognitions they have received and the significance of these awards in showcasing their commitment to excellence.</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://images.unsplash.com/photo-1543992321-cefacfc2322e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;