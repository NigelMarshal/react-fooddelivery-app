import React, { useState, useEffect } from 'react';
import DishItem from './DishItem/DishItem'
import { v4 as uuid } from 'uuid';

const Dishes = ({ menuItems, menuCategories, separatedCategories, setSeparatedCategories, searching, searchResult }) => {


    // const handleMenuItem = (item) => {
    //     console.log("Clicked on ", item);
    //     item.allowedClicks -= 1;
    //     Object.keys(separatedCategories).forEach((outer) => {
    //         separatedCategories[outer].forEach((inner) => {
    //             if (item.id === inner.id) {
    //                 inner = item;
    //             }
    //         });
    //     })
    //     setSeparatedCategories(separatedCategories);
    // }

    // Change later
    const [mergedMenuItems, setMergedMenuItems] = useState([]);


    useEffect(() => {
        let menuContent = [];
        if (separatedCategories && !searching) {
            Object.keys(separatedCategories).forEach((outer, i) => {
                menuContent.push(<h1 key={i} className="font-bold text-2xl pt-3">{menuCategories[outer - 1].name}</h1>);
                separatedCategories[outer].forEach((inner, j) => {
                    if (inner.stock && inner.stock.availability)
                        menuContent.push((
                            <DishItem key={uuid()} menuItems={inner} />
                        ));
                });
            });
        }
        setMergedMenuItems(menuContent);
    }, [separatedCategories, menuCategories, searching]);

    useEffect(() => {
        if (searching) {
            let menuContent = [];
            Object.keys(searchResult).forEach((e) => {
                menuContent.push(<DishItem menuItems={searchResult[e]} key={searchResult[e].id} />);
            });
            setMergedMenuItems(menuContent);
        }
    }, [searchResult, searching]);

    return (
        <div className="container mx-auto pt-6">
            <div className=" justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
                {mergedMenuItems}
            </div>
        </div>
    );
}

export default Dishes;