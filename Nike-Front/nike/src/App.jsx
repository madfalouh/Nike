import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import RegisterPage from "./pages/register/RegisterPage";
import NavBar from "./component/navbar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Footer from "./component/footer/Footer";
import ShopPage from "./pages/shop/ShopPage";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/cart/CartPage";
function App() {
  return (
    <>
      <div className="blur-overlay"></div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/update-password" element={<UpdatePassword />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
