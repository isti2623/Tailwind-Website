import React from 'react';

const SingleFood = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props.food;
    return (
        <div class="p-10 ">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full duration-700 ease-in transition" src={strCategoryThumb} alt="" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{strCategory}</div>
                    <p class="text-gray-700 text-base">
                        {strCategoryDescription.slice(0, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;