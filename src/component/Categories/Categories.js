import React from 'react';

const Categories = ({ category }) => {
    const { picture, name } = category;
    return (
        <div class="flex flex-col  items-center hover:scale-105 transition-all font-poppins justify-center w-full max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img  src={picture} alt="" />
            </div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 class="py-2 font-bold tracking-wide text-center text-black uppercase dark:text-white">{name}</h3>

                <div class="flex items-center justify-between px-3 py-2 bg-[#FF8400] dark:bg-gray-700">
                    <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-black rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">See Items</button>
                </div>
            </div>
        </div>
    );
};

export default Categories;