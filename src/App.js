import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from './component/context/ContextProvider';
import Home from './component/Home'
import Header from './component/Header';
import ChooseCity from './component/ChooseCity';
import HomeDetail from './component/HomeDetail';
import Footer from './component/Footer';
import Listing from './component/Listing';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ChooseCity />} />
            <Route path='/category/:categoryName' element={<Listing />} />
            <Route path='/homedetail/:id' element={<HomeDetail />} />
          </Routes>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
