import './App.css';
import { ProductList } from './compenents/compenent_product.list';
import { ProductAddForm } from './compenents/compenent-productadd';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from './compenents/compenent.admin.layout';

function App() {
  return (
    <Routes>
        <Route path="/" element={<AdminLayout/>}>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products/new' element={<ProductAddForm/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
