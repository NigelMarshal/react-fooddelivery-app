import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dishes from './components/Dishes/Dishes'

const App = () => {

  const [menuItems, setMenuData] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seperatedCategories, setSeperatedCategories] = useState([]);
  // const [filteredItems, setFilteredItems] = useState(menuItems);

  // const handleSearch = (event) => {

  // }

  //API Call
  useEffect(() => {
    (async () => {
      setLoading(true);
      let url = "";
      let dishes = (await (await fetch(url)).json())

      let category = {};
      dishes.items.forEach(e => {
        //Matching menu item with its respective category
        if (typeof category[e.category_id] != 'object')
          category[e.category_id] = [];
        //Tracking stock qty to prevent over ordering 
        e.allowedClicks = e.stock ? e.stock.availability : 0;
        category[e.category_id].push(e);
      });

      setMenuData(dishes.items);
      setMenuCategories(dishes.categories);
      setSeperatedCategories(category);
      setLoading(false);
    })()
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(menuItems, "Items");
  console.log(menuCategories, "Categories");

  return (
    <div className="App">
      <Header />
      <Search placeholder="Search for dishes..." onChange={(e) => console.log(e.target.value)} />
      <Dishes menuItems={menuItems} menuCategories={menuCategories} setSeperatedCategories={setSeperatedCategories} seperatedCategories={seperatedCategories} />
    </div>
  );
}

export default App;
