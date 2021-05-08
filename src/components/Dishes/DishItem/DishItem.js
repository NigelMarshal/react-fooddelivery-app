import './DishItem.css';
import React, { useState, useEffect } from 'react'

let clickArr = []
const DishItem = ({ menuItems, seperatedCategories, menuCategories, handleSelectedItem }) => {

    const [selected, setSelected] = useState();
    const [selectedCount, setSelectedCount] = useState(0);
    let clickedItem = []
    const handleMenuItem = () => {
        // setSelectedCount(selectedCount + 1);
        // 
        setSelected(true);
        let clickedName = menuItems.name
        // console.log(menuItems.name)
        clickArr.push(clickedName)
        console.log(clickArr)

        // localStorage.setItem("Clicked", clickedItem)

        // let currentSelected = 0;
        // currentSelected++;
        // 

    }
    return (
        <>
            <div className={selected ? "py-5 mb-5 flex dish__item--selected" : "py-5 mb-5 flex"} onClick={handleMenuItem}>
                <div>
                    <div className="text-xl font-medium text-black">{menuItems.name}</div>
                    <p className="text-gray-500 pb-5">{menuItems.description}</p>
                    <p className="pb-5 inline-block">AED {menuItems.price}</p>
                    {
                        (menuItems.discount_rate !== 0) &&
                        <p className="text-red-500 line-through inline-block px-3"> {menuItems.price - (menuItems.discount_rate * menuItems.price)} </p>

                    }
                </div>
                <div className="ml-auto">
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
