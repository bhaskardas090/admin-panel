import './app.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import { Routes, Route } from 'react-router-dom';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import MobileSidebar from './components/mobileSidebar/MobileSidebar';
import { useState } from 'react';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="app">
      {!mobileMenu && (
        <>
          <Topbar setMobileMenu={setMobileMenu} setIsMobile={setIsMobile} />
          <div className="main">
            <Sidebar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newProduct" element={<NewProduct />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      {mobileMenu && (
        <MobileSidebar
          setIsMobile={setIsMobile}
          setMobileMenu={setMobileMenu}
        />
      )}
    </div>
  );
}

export default App;
