import React from 'react'

const DishItem = ({ menuItems }) => {
    return (
        <>
            <div className="py-5 mb-5 flex justify-between ">
                <div>
                    <div className="text-xl font-medium text-black">{menuItems.name}</div>
                    <p className="text-gray-500">{menuItems.description}</p>
                    <p className="pb-5">{menuItems.price}</p>
                </div>
                <img src={menuItems.photo} width="91" height="91" alt="" />
            </div>
            <hr />
        </>
    )
}

export default DishItem
