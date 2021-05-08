import React, { useState, useEffect } from 'react';
import DishItem from './DishItem/DishItem'


const Dishes = ({ menuItems, menuCategories, seperatedCategories, setSeperatedCategories, searching, searchResult }) => {


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
        console.log("Rendered Dishes.js");
    }, []);

    useEffect(() => {
        let menuContent = [];
        if (seperatedCategories && !searching) {
            Object.keys(seperatedCategories).forEach((outer) => {
                menuContent.push(<h1 key={Math.floor(Math.random() * 10000000)} className="font-bold text-2xl">{menuCategories[outer - 1].name}</h1>);
                seperatedCategories[outer].forEach((inner) => {
                    if (inner.stock && inner.stock.availability)
                        menuContent.push((
                            <DishItem menuItems={inner} key={inner.id} />
                        ));
                });
            });
        }
        setMergedMenuItems(menuContent);
    }, [seperatedCategories, menuCategories, searching]);
    // -----

    useEffect(() => {
        if (searching) {
            let menuContent = [];
            console.log("from Dishes.js > ", searchResult);
            Object.keys(searchResult).forEach((e) => {
                menuContent.push(<DishItem menuItems={searchResult[e]} key={searchResult[e].id} />);
            });
            setMergedMenuItems(menuContent);
        }
    }, [searchResult]);

    return (
        <div className="container mx-auto pt-6">
            <div className=" justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
                {mergedMenuItems}
            </div>
        </div>
    );
}

export default Dishes;