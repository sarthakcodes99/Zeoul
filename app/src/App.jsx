import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import Home from "./components/Main";
import Footer from "./components/Footer";
import Cleandata from "./components/Cleandata";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [activePage, setActivepage] = useState("Home")
    const handleToggle = () => {
      setActivepage("Cleanpage")
    }
    return(
      <>
     <Navbar />
     <Nav2 myCustomFunction={handleToggle}/>
     {activePage === "Home" ? <Home /> : <Cleandata />}
     {activePage === "Home" ? <Footer/> :""}
     
      </>
    )
}

export default App;