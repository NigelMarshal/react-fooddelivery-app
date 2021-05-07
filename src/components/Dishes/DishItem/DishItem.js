import React, { useState, useEffect } from 'react'

const DishItem = ({ menuItems, seperatedCategories, menuCategories }) => {

    return (
        <>
            <div className="py-5 mb-5 flex justify-between" onClick={(e) => console.log("Clicked")}>
                <div>
                    <div className="text-xl font-medium text-black">{menuItems.name}</div>
                    <p className="text-gray-500 pb-5">{menuItems.description}</p>
                    <p className="pb-5 inline-block">AED {menuItems.price}</p>
                    {console.log(menuItems.stock)}
                    {
                        (menuItems.discount_rate !== 0) &&
                        <p className="text-red-500 line-through inline-block px-3"> {menuItems.price - (menuItems.discount_rate * menuItems.price)} </p>

                    }
                </div>
                <div>
                    {
                        (menuItems.photo) && <img src={menuItems.photo} width="91" height="91" alt="" />
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default DishItem
