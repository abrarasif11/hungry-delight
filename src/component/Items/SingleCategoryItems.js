import React from 'react';

const SingleCategoryItems = ({ singleItem, setSingleCategories }) => {
    const { picture, name, price } = singleItem;
    return (
        <div className="max-w-xs p-6 rounded-md mb-10 shadow-md bg-white text-black font-poppins">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xl font-semibold tracking-widest uppercase dark:text-violet-400">{name}</span>
                <h2 className="text-lg font-semibold tracking-wide">Price : {price}</h2>
            </div>
            <label 
                 htmlFor="order-modal" type="button"
                 className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#FF8400] hover:bg-[#FFD93D] text-black"
                 onClick={() => setSingleCategories(singleItem)}
                 >Book Now</label>
        </div>
    );
};

export default SingleCategoryItems;