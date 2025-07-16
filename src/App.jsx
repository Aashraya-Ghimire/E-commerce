import { React, useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Landing from "./Component/pages/home/Landing";
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
