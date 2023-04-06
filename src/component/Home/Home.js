import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Category from '../Categories/Category';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <Banner2></Banner2>
            <p className='text-4xl font-poppins font-bold mt-20 text-black'>See Our Food Categories</p>
            <Category></Category>
        </div>
    );
};

export default Home;