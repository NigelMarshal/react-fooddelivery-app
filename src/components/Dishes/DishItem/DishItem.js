import React from 'react'

const DishItem = ({ menuItems }) => {
    return (
        <div className="flex-shrink-0">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md">
                <img src="https://place-hold.it/91x91" alt="" />
                <div className="text-xl font-medium text-black">{menuItems.name}</div>
                <p className="text-gray-500">{menuItems.description}</p>
                <p>{menuItems.price}</p>
            </div>
        </div>
    )
}

export default DishItem
