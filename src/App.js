import React from "react";
import NavbarTop from "./pages/NavbarTop";
import ImgCarousel from "./containers/ImgCarousel";
import AosText from "./containers/AosText";


function App() {
  return (
    <div className="App">
        <NavbarTop/>
        <ImgCarousel/>
        <AosText/>
    </div>
  );
}

export default App;
