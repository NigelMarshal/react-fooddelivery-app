import './DishItem.css';
import React, { useState, useEffect } from 'react'
import _ from 'underscore'


let clickedItems = []
const DishItem = ({ menuItems, seperatedCategories, menuCategories, handleSelectedItem }) => {

    const [selected, setSelected] = useState();
    const [selectedCount, setSelectedCount] = useState(0);

    const handleMenuItem = () => {
        setSelected(true);
        console.log("menuItem", menuItems);
        let clickedInfo = JSON.parse(localStorage.getItem('Selected_dish'));
        if (clickedInfo == null) {
            clickedInfo = [];
        }
        if (menuItems.allowedClicks - 1) {
            let clickedDish = menuItems.name
            clickedItems.push(clickedDish)
            console.log(clickedItems)
            menuItems.allowedClicks -= 1;
            setSelectedCount(selectedCount + 1)
            clickedInfo.push(menuItems.id);
            console.log('clickedInfo: ', clickedInfo);
            localStorage.setItem("Selected_dish", JSON.stringify(clickedInfo))
        }
    }

    useEffect(() => {
        let clickedItems = _.countBy(JSON.parse(localStorage.getItem('Selected_dish')));
        console.log("Clicked menu items", clickedItems);
        // Continue from here.. 
        // For local storage stuff

    }, []);

    return (
        <>
            <div className={selected ? "py-5 mb-5 flex dish__item--selected" : "py-5 mb-5 flex"} onClick={handleMenuItem}>
                <div className="w-9/12">
                    <div className="text-xl font-medium text-black">{(selectedCount !== 0) && `${selectedCount}x`} {menuItems.name}</div>
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
