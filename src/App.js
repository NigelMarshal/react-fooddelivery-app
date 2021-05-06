import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dishes from './components/Dishes/Dishes'

const App = () => {

  const [menuItems, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filteredItems, setFilteredItems] = useState(menuItems);

  // const handleSearch = (event) => {

  // }

  useEffect(() => {
    setLoading(true);
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(menuItems);

  return (
    <div className="App">
      <Header />
      <Search />
      <Dishes menuItems={menuItems} />
    </div>
  );
}

export default App;
