import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryItems from './SingleCategoryItems';
import CategoryModal from './CategoryModal';

const Items = () => {
    const singleItems = useLoaderData();
    console.log(singleItems);
    const [singleCategories, setSingleCategories] = useState(null)
    return (
        <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10'>
            {
                singleItems.map(singleItem => <SingleCategoryItems
                    key={singleItem.id}
                    singleItem={singleItem}
                    setSingleCategories={setSingleCategories}
                ></SingleCategoryItems>)
            }
            {
                <div>
                    {
                        singleCategories &&
                        <CategoryModal
                            singleCategories={singleCategories}
                            setSingleCategories={setSingleCategories}
                        >
                        </CategoryModal>
                    }
                </div>
            }
        </div>
    );
};

export default Items;