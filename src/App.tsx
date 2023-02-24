import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import SignupPage from "./components/signUpPage/SignupPage";
import Home from "./components/homePage/HomePage";
function App() {
  const localUserID = localStorage.getItem("UserID");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            localUserID ? <Navigate to="/home" /> : <Navigate to="login" />
          }
        ></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="sign-up" element={<SignupPage />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
