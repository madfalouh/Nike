import "./App.css";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import RegisterPage from "./pages/register/RegisterPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
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
