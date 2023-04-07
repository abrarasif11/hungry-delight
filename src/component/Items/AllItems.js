import React, { useEffect, useState } from 'react';
import ShowAllItems from './ShowAllItems';

const AllItems = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allFoodItems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h3 className="text-black text-4xl font-poppins font-bold mt-10">Our Items</h3>
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10'>
                {
                    allItems.map(allItem => <ShowAllItems
                        key={allItem.id}
                        allItem={allItem}
                    
                    ></ShowAllItems>)
                }
        </div>
        </div>
    );
};

export default AllItems;