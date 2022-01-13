import React from 'react';
import Food from './Food';



const Home = () => {
    return (
        <div>
            <div class="ml-80 mt-5">
                <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" alt="" />
            </div>
            <div>
                <Food />
            </div>

        </div>
    );
};

export default Home;