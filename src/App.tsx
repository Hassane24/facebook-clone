import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import SignupPage from "./components/signUpPage/SignupPage";
import Home from "./components/homePage/HomePage";
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  }, [isLoggedIn]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="sign-up" element={<SignupPage />}></Route>
        <Route
          path="home"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <h1
                style={{
                  color: "white",
                  display: isLoggedIn ? "none" : "block",
                }}
              >
                Not Logged In
              </h1>
            )
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
