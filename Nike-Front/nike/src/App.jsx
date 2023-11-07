import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import RegisterPage from "./pages/register/RegisterPage";
import NavBar from "./component/navbar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Footer from "./component/footer/Footer";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
