import Home from "./pages/Home";
import ProductFilterPage from "./pages/ProductFilterPage";
import Productview from "./pages/ProductView";
import ShoppingCart from "./pages/ShoppingCart";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Admin from "./pages/Admin/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";
import CategoryList from "./pages/Admin/CategoryList";
import OrderList from "./pages/Admin/OrderList";
import TransactionList from "./pages/Admin/TransactionList";
import Settings from "./pages/Admin/Settings";
import Login from "./pages/Login";
import RegisterComponent from "./components/registerComponent/RegisterComponent";
import Account from "./components/account/Account";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="product/:id" element={<Productview />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="products" element={<ProductFilterPage />} />
          <Route path="products/:keyword" element={<ProductFilterPage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/dashboard/addproduct/" element={<AddProduct />} />
          <Route path="admin/dashboard/productlist/" element={<ProductList />} />
          <Route path="admin/dashboard/categorylist/" element={<CategoryList />} />
          <Route path="admin/dashboard/orderlist/" element={<OrderList />} />
          <Route path="admin/dashboard/transactionlist/" element={<TransactionList />} />
          <Route path="admin/dashboard/settings/" element={<Settings />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
