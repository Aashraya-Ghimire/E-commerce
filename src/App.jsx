import { React, useEffect } from "react";
import Landing from "./Component/Landing/Landing";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
