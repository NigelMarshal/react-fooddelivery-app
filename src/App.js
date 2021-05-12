import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dishes from './components/Dishes/Dishes'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

const App = () => {

  const [menuItems, setMenuData] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [separatedCategories, setSeparatedCategories] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResults] = useState([]);

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
        category[e.category_id].push(e);
        //Tracking stock qty to prevent over ordering 
        e.dishesInStock = e.stock ? e.stock.availability : 0;
        //Get value from local Storage if available (Value depending on how many items user added to cart)
        e.dishesInStock = localStorage.getItem(e.name) ? e.dishesInStock - localStorage.getItem(e.name) : e.dishesInStock;
      });
      setMenuData(dishes.items);
      setMenuCategories(dishes.categories);
      setSeparatedCategories(category);
      setLoading(false);
    })()
  }, []);

  if (loading) {
    return <LoadingSpinner />
  }

  //Search dishes
  const searchHandler = (e) => {
    let currValue = e.target.value;
    (currValue.length > 0) ? setSearching(true) : setSearching(false);
    let category = {};
    let separatedCategoriesCopy = { ...separatedCategories };
    Object.keys(separatedCategoriesCopy).forEach(outer => {
      separatedCategoriesCopy[outer].forEach(inner => {
        if (inner.name.toLowerCase().includes(currValue.toLowerCase())) {
          category[inner.category_id] = inner;
        }
      });
    })
    setSearchResults(category);
  }

  return (
    <div className="App">
      <Header />
      <Search placeholder="Search for dishes..." handleSearch={searchHandler} />
      <Dishes
        menuItems={menuItems}
        menuCategories={menuCategories}
        searching={searching}
        searchResult={searchResult}
        setSeparatedCategories={setSeparatedCategories}
        separatedCategories={separatedCategories}
      />
    </div>
  );
}

export default App;
