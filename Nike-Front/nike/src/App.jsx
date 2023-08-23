import "./App.css";
import Login from "./login/Login";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
