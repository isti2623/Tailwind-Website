import React, { useEffect, useState } from 'react';
import SingleFood from './SingleFood';

const Food = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, [])
    return (
        <div>
            <div class="container mx-auto">
                <div className='grid grid-cols-3 gap-4'>
                    {
                        foods.map(food => <SingleFood
                            key={food.key}
                            food={food}
                        >
                        </SingleFood>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Food;