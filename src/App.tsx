import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
