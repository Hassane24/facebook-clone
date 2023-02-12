import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import SignupPage from "./components/signUpPage/SignupPage";
import Header from "./components/signUpPage/Header";
function App() {
  const [userID, setUserID] = useState<string | null>(null);
  useEffect(() => {
    const localUserID = localStorage.getItem("UserID");
    if (localUserID) setUserID(localUserID);
  }, []);
  return (
    <Router>
      <Routes>
        {userID && <Route path="/" element={<Header />}></Route>}
        {!userID && <Route path="/" element={<Navigate to="/login" />}></Route>}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
