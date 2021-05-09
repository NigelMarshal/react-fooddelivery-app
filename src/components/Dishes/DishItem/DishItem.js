import './DishItem.css';
import React, { useState, useEffect } from 'react'
import StockAlert from '../../StockAlert/StockAlert'
import _ from 'underscore'

const DishItem = ({ menuItems }) => {

    const [selected, setSelected] = useState();
    const [selectedCount, setSelectedCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    let clickedItems = []

    const handleMenuItem = () => {
        //On click toggle selector and create an empty array to hold local storage values
        setSelected(true);
        let clickedInfo = JSON.parse(localStorage.getItem('Selected_dish'));
        if (clickedInfo == null) {
            clickedInfo = [];
        }
        //Dishes in stock tracks the inventory. 
        //Per click, this goes down until it runs out for that item
        if (menuItems.dishesInStock) {
            let clickedDish = menuItems.name
            clickedItems.push(clickedDish)
            console.log(menuItems)
            console.log(menuItems.name, menuItems.id)
            menuItems.dishesInStock -= 1;
            setSelectedCount(selectedCount + 1)
            clickedInfo.push(menuItems.id);
            //Store the ids of all the clicked dishes in local storage
            localStorage.setItem("Selected_dish", JSON.stringify(clickedInfo))
        }
        //Toggle a modal that notifies when you've hit the order/inventory limit
        if (menuItems.dishesInStock === 0) {
            togglePopup();
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    // const restoreCart = () => {
    //     let clickedItems = _.countBy(JSON.parse(localStorage.getItem('Selected_dish')));
    //     console.log("Clicked menu items", clickedItems);
    //     console.log(menuItems.id)
    // }

    useEffect(() => {
        let clickedItems = _.countBy(JSON.parse(localStorage.getItem('Selected_dish')));
        console.log("Clicked menu items", clickedItems);
        console.log(menuItems)
        for (const [key, value] of Object.entries(clickedItems)) {
            let clickedItemsId = key;
            let numberOfClicks = value;
            console.log("You clicked ", clickedItemsId)
            console.log("You clicked this many times ", numberOfClicks)
        }

        // restoreCart();
        // Continue from here.. 
        // For local storage stuff

    }, [menuItems]);

    return (
        <>
            {/* Check for inventory/cart status */}
            {isOpen && <StockAlert />}
            <div className={selected ? "py-5 mb-5 flex dish__item--selected" : "py-5 mb-5 flex"} onClick={handleMenuItem}>
                <div className="w-9/12">
                    {/* Display the counter for each selected dish */}
                    <div className="text-xl font-medium text-black">{(selectedCount !== 0) && `${selectedCount}x`} {menuItems.name}</div>

                    <p className="text-gray-500 pb-5">{menuItems.description}</p>
                    {/* Calculating price and conditionally rendering the discount. 
                    Prices are rounded off to the nearest integer */}
                    {
                        (menuItems.discount_rate !== 0) &&
                        <p className="inline-block pr-3"> AED {Math.round((menuItems.price / 100) - (menuItems.discount_rate * (menuItems.price / 100)))} </p>

                    }
                    <p className={menuItems.discount_rate === 0 ? "pb-5 inline-block" : "pb-5 inline-block line-through text-gray-500"}>AED {menuItems.price / 100}</p>

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
