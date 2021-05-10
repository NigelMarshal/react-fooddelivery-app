import './DishItem.css';
import React, { useState } from 'react'
import StockAlert from '../../StockAlert/StockAlert'
import useLocalStorage from '../../../hooks/useLocalStorage'

const DishItem = ({ menuItems }) => {

    const [selected, setSelected] = useState();
    const [selectedCount, setSelectedCount] = useLocalStorage(menuItems.name, 0);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItem = () => {
        //On click toggle selector
        setSelected(true);
        //Per click, this goes down until it runs out for that item
        if (menuItems.dishesInStock) {
            menuItems.dishesInStock -= 1;
            setSelectedCount(selectedCount + 1)
        }
        //Toggle a modal that notifies when you've hit the order/inventory limit
        if (menuItems.dishesInStock === 0) {
            togglePopup();
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* Check for inventory/cart status */}
            {isOpen && <StockAlert />}
            <div className={selected || selectedCount > 0 ? "py-5 mb-5 flex dish__item--selected" : "py-5 mb-5 flex"} onClick={handleMenuItem}>
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
