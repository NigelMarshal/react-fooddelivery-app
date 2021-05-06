import React from 'react';
import DishItem from './DishItem/DishItem'

const dishesList = [
    { id: 1, name: 'Shoes', description: 'Running shoes' },
    { id: 2, name: 'Socks', description: 'Running socks' }
];

const Dishes = ({ menuItems }) => {
    return (
        <div className="container mx-auto pt-6">
            <div className="flex justify-left max-w-screen-sm mx-auto px-10 pb-5 ">

                {menuItems.items.map((dishes) => (
                    <DishItem key={dishes.id} menuItems={dishes} />
                ))}

            </div>
        </div>
    );
}

export default Dishes;