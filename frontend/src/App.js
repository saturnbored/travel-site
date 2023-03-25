import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Package from "./Pages/Package";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/package" element={<Package />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/admin" element={<AdminPage/>} exact />
      </Routes>
    </div>
  );
}

export default App;
