import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://hungry-delight-server.vercel.app/foodItems')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    
    return (
        <div className='grid mx-10 sm:grid-cols-3 gap-3 ml-10 sm:ml-3  mt-10 mb-20'>
        {
            categories.map(category => <Categories
            key={category.id}
            category={category}
            ></Categories>)
        }
      </div>
    );
};

export default Category;