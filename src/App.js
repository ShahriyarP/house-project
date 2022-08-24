import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from './component/context/ContextProvider';
import Home from './component/Home';
import Pages from './component/Pages';
import Header from './component/Header';
import HomeItem from './component/HomeInfo';
import ChooseCity from './component/ChooseCity';
import HomeDetail from './component/HomeDetail';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ChooseCity />} />
            <Route path='/homedetail/:id' element={<HomeDetail />} />
            <Route path='/' element={<Footer />} />
          </Routes>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
