import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Category from '../Categories/Category';
import FoodGallery from '../FoodGallery/FoodGallery';
import { Link, useNavigate } from 'react-router-dom';
import Banner3 from './Banner3';

const Home = () => {
    const navigate = useNavigate();
    const handleAllCategory = () => {
        // navigate("/allItems");
    };
    return (
        <div>
            <Banner1></Banner1>
            <Banner2></Banner2>
            <p className='text-4xl font-poppins font-bold mt-20 text-black'>See Our Food Categories</p>
            <Category></Category>
            <div>
                <Link className='flex items-center justify-center
                       ' to='/allItems'>
                    <button
                        className="py-4 px-6  m-2  font-poppins text-xl text-white  font-medium rounded-lg bg-gradient-to-rounded-md bg-[#FF8400] hover:bg-[#EBB02D]	 hover:text-white"
                        onClick={handleAllCategory}
                    >
                        See All Items
                    </button>
                </Link>      
            </div>
            <p className='text-4xl font-poppins font-bold mt-20 text-black'>Food Gallery</p>
            <FoodGallery></FoodGallery>
            <Banner3></Banner3>
        </div>
    );
};

export default Home;