import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Package from "./Pages/Package";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
// import Team from "./Pages/Team";
import Banner from "./Pages/Banner";
import { useEffect, useState } from "react";
import Admin from "./Pages/Team";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState({status: false, isAdmin: false});

  
  // console.log(token);
  
  const [fetchAgain, setFetchAgain] = useState(false);
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("session"));
    if(token){
      setIsLoggedIn({
        status: true,
        isAdmin: token.isAdmin,
      });
    }
  }, [fetchAgain]);

  console.log('iiiiiii', isLoggedIn);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp isLoggedIn = {isLoggedIn} fetchAgain={fetchAgain} setFetchAgain = {setFetchAgain} />} exact />
        <Route path="/home" element={<HomePage isLoggedIn = {isLoggedIn} fetchAgain={fetchAgain} setFetchAgain = {setFetchAgain} />} exact />
        <Route path="/about" element={<AboutPage isLoggedIn = {isLoggedIn} fetchAgain = {fetchAgain} setFetchAgain = {setFetchAgain} />} exact />
        <Route path="/package" element={<Package isLoggedIn = {isLoggedIn} fetchAgain={fetchAgain} />}  exact />
        <Route path="/signin" element={<SignIn isLoggedIn = {isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain = {fetchAgain} />} exact />
        <Route path="/team" element={<Admin isLoggedIn = {isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain={fetchAgain} />} exact />
        {/* <Route path="/banner" element={<Banner />} exact /> */}
      </Routes>
    </div>
  );
}

export default App;
