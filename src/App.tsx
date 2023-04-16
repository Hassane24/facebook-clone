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
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const userID = localStorage.getItem("UserID");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  }, [isLoggedIn]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn || userID ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="sign-up" element={<SignupPage />}></Route>
        <Route
          path="home"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/not-logged-in" />
            )
          }
        ></Route>
        <Route path="not-logged-in" element={<h1>Not Logged In</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
