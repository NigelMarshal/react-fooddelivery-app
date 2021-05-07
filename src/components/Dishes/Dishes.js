import React, { useState, useEffect } from 'react';
import DishItem from './DishItem/DishItem'


const Dishes = ({ menuItems, menuCategories, seperatedCategories, setSeperatedCategories }) => {


    // const handleMenuItem = (item) => {
    //     console.log("Clicked on ", item);
    //     item.allowedClicks -= 1;
    //     Object.keys(seperatedCategories).forEach((outer) => {
    //         seperatedCategories[outer].forEach((inner) => {
    //             if (item.id === inner.id) {
    //                 inner = item;
    //             }
    //         });
    //     })
    //     setSeperatedCategories(seperatedCategories);
    // }

    // Change later
    const [mergedMenuItems, setMergedMenuItems] = useState([]);

    useEffect(() => {
        let menuContent = [];
        if (seperatedCategories) {
            Object.keys(seperatedCategories).forEach((outer) => {
                menuContent.push(<h1 className="font-bold text-2xl">{menuCategories[outer - 1].name}</h1>);
                seperatedCategories[outer].forEach((inner) => {
                    if (inner.stock && inner.stock.availability)
                        menuContent.push((
                            <DishItem menuItems={inner} key={inner.id} />
                        ));
                });
            });
        }
        setMergedMenuItems(menuContent);
    }, [seperatedCategories, menuCategories]);
    // -----

    return (
        <div className="container mx-auto pt-6">
            <div className=" justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
                {mergedMenuItems}
            </div>
        </div>
    );
}

export default Dishes;