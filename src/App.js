import React from "react";
import NavbarTop from "./pages/NavbarTop";
import ImgCarousel from "./containers/ImgCarousel";
import AosText from "./containers/AosText";
import CaruselGroup from "./containers/CaruselGroup";
import HomeText from "./containers/HomeText";


function App() {
    return (
        <div className="App">
            <NavbarTop/>
            <ImgCarousel/>
            <AosText/>
            <CaruselGroup/>
            <HomeText/>
        </div>
    );
}

export default App;
