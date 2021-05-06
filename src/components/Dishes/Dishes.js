import React from 'react';
import DishItem from './DishItem/DishItem'


const Dishes = ({ menuItems }) => {
    return (
        <div className="container mx-auto pt-6">
            <div className=" justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
                {menuItems.map((dishes) => (
                    <DishItem key={dishes.id} menuItems={dishes} />
                ))}
            </div>
        </div>
    );
}

export default Dishes;