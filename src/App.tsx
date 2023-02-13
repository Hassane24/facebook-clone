import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import SignupPage from "./components/signUpPage/SignupPage";
import Header from "./components/signUpPage/Header";
function App() {
  const localUserID = localStorage.getItem("UserID");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={localUserID ? <Header /> : <Navigate to="login" />}
        ></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="sign-up" element={<SignupPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
