import './App.css';
import Navigation from './components/navbar/Navigation';
import SearchPrices from './components/searchPricesPage/SearchPricesPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchPrices />
    </div>
  );
}

export default App;
