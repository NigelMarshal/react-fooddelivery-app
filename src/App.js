import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dishes from './components/Dishes/Dishes'

const App = () => {

  const [menuItems, setMenuData] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seperatedCategories, setSeperatedCategories] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSeachResults] = useState([]);

  // const [filteredItems, setFilteredItems] = useState(menuItems);

  // const handleSearch = (event) => {

  // }

  //API Call
  useEffect(() => {
    (async () => {
      setLoading(true);
      let url = "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/menu.json";
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

  const searchHandler = (e) => {
    let currValue = e.target.value;
    if (currValue.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    let category = {};
    let seperatedCategoriesCpy = { ...seperatedCategories };
    Object.keys(seperatedCategoriesCpy).forEach(outer => {
      seperatedCategoriesCpy[outer].forEach(inner => {
        if (inner.name.toLowerCase().includes(currValue.toLowerCase())) {
          category[inner.category_id] = inner;
        }
      });
    })
    setSeachResults(category);
  }

  return (
    <div className="App">
      <Header />
      <Search placeholder="Search for dishes..." handleSearch={searchHandler} />
      <Dishes menuItems={menuItems} menuCategories={menuCategories} searching={searching} searchResult={searchResult} setSeperatedCategories={setSeperatedCategories} seperatedCategories={seperatedCategories} />
    </div>
  );
}

export default App;
