import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import Home from "./components/Main";
import Footer from "./components/Footer";
import Cleandata from "./components/Cleandata";
import { useState } from "react";
import Midline from "./components/Midline";
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
     <Midline />
     {activePage === "Home" ? <Footer/> :""}
     
      </>
    )
}

export default App;