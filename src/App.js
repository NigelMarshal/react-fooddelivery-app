import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dish from './components/Dish/Dish'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Dish />
    </div>
  );
}

export default App;
