import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products'
import Categories from './pages/categories';
import Add from './pages/Add';

import View from './pages/View';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <div className='row'>
      <div className='col-2 sidebar' ><Sidebar/></div>
      <div className='col-10'>
      <Routes>
        
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Products />} exact />
            <Route path="/Categories" element={<Categories/> } />
            <Route path="products/add" element={ <Add/>} />
            
            <Route path='products/:productID' element={<View/> } />
      </Routes>
      
      </div>
      </div>
      
    </div>
  );
}

export default App;
