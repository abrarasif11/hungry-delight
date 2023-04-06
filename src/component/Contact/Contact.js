import React from 'react';
import contact from '../../assests/Black Purple Boy with Laptop Illustration Safer Internet Day Poster.gif'
const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const message = form.message.value;
        console.log({ name, email, message });
        // toast.success('Thank You!!!')
    }
    return (
        <section class="min-h-screen  font-poppins bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center lg:-mx-10">
                    <div class="lg:w-1/2 lg:mx-10">
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">Contact Us!</h1>

                        <p class="mt-4 text-gray-500 dark:text-gray-400">
                            Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.
                        </p>

                        <form onSubmit={handleSubmit} class="mt-12 ml-10">
                            <div class="-mx-2 md:items-center md:flex">
                                <div class="flex-1 px-2">
                                    <label for='name' class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input name='name' type="text" placeholder="Full Name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div class="flex-1 px-2 mt-4 md:mt-0">
                                    <label for='email' class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input name='email' type="email" placeholder="Email Address" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>
                            <div class="w-full mt-4">
                                <label for='message' class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea name='message' class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>
                            <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-800 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={contact} alt="" />

                        <div class="mt-6 space-y-8 md:mt-8">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;