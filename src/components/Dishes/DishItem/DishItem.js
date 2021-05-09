import './DishItem.css';
import React, { useState, useEffect } from 'react'
import _ from 'underscore'


let clickedItems = []
const DishItem = ({ menuItems, seperatedCategories, menuCategories, handleSelectedItem }) => {

    const [selected, setSelected] = useState();
    const [selectedCount, setSelectedCount] = useState(0);

    const handleMenuItem = () => {
        setSelected(true);
        let clickedInfo = JSON.parse(localStorage.getItem('Selected_dish'));
        if (clickedInfo == null) {
            clickedInfo = [];
        }
        if (menuItems.allowedClicks) {
            let clickedDish = menuItems.name
            clickedItems.push(clickedDish)
            console.log(menuItems)
            console.log(menuItems.name, menuItems.id)
            menuItems.allowedClicks -= 1;
            setSelectedCount(selectedCount + 1)
            clickedInfo.push(menuItems.id);
            localStorage.setItem("Selected_dish", JSON.stringify(clickedInfo))
        }
    }


    // const restoreCart = () => {
    //     let clickedItems = _.countBy(JSON.parse(localStorage.getItem('Selected_dish')));
    //     console.log("Clicked menu items", clickedItems);
    //     console.log(menuItems.id)
    // }

    useEffect(() => {
        let clickedItems = _.countBy(JSON.parse(localStorage.getItem('Selected_dish')));
        console.log("Clicked menu items", clickedItems);
        console.log(menuItems.id)
        // restoreCart();
        // Continue from here.. 
        // For local storage stuff

    }, []);

    return (
        <>
            <div className={selected ? "py-5 mb-5 flex dish__item--selected" : "py-5 mb-5 flex"} onClick={handleMenuItem}>
                <div className="w-9/12">
                    <div className="text-xl font-medium text-black">{(selectedCount !== 0) && `${selectedCount}x`} {menuItems.name}</div>

                    <p className="text-gray-500 pb-5">{menuItems.description}</p>
                    {
                        (menuItems.discount_rate !== 0) &&
                        <p className="inline-block pr-3"> AED {Math.round((menuItems.price / 100) - (menuItems.discount_rate * (menuItems.price / 100)))} </p>

                    }
                    <p className={menuItems.discount_rate == 0 ? "pb-5 inline-block" : "pb-5 inline-block line-through"}>AED {menuItems.price / 100}</p>

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
