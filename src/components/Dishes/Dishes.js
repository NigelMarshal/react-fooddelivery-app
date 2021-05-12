import React, { useState, useEffect } from 'react';
import DishItem from './DishItem/DishItem'
import { v4 as uuid } from 'uuid';

const Dishes = ({ menuCategories, separatedCategories, searching, searchResult }) => {
    const [mergedMenuItems, setMergedMenuItems] = useState([]);
    useEffect(() => {
        let menuContent = [];
        //Sort items in their respective categories
        if (separatedCategories && !searching) {
            Object.keys(separatedCategories).forEach((outer, i) => {
                menuContent.push(<h2 key={i} className="font-semibold text-2xl pt-3">{menuCategories[outer - 1].name}</h2>);
                separatedCategories[outer].forEach((inner, j) => {
                    //Only display items which are in stock
                    if (inner.stock && inner.stock.availability)
                        menuContent.push((
                            <DishItem key={uuid()} menuItems={inner} />
                        ));
                });
            });
        }
        setMergedMenuItems(menuContent);
    }, [separatedCategories, menuCategories, searching]);

    //Display filtered searched dishes
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
        <div className="container mx-auto pt-6" data-testid="dishes">
            <div className=" justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
                {mergedMenuItems}
            </div>
        </div>
    );
}

export default Dishes;