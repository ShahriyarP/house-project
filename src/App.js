import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from './component/context/ContextProvider';
import Home from './component/Home';
import Pages from './component/Pages';
import Header from './component/Header';
import HomeItem from './component/HomeItem';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/homeInfo/:id' element={<HomeItem />} />
          </Routes>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
