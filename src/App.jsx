import { React, useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Landing from "./Component/pages/home/Landing";
import productDataApi from "./Component/Api/productData.api";
import Categories from "./Component/pages/home/Categories";
import Product from "./Component/Product/Product";
function App() {
  const [productData, setProductData] = useState([]);
  const [maindata, setMaindata] = useState([]);

  useEffect(() => {
    productDataApi(setProductData, setMaindata);
  }, []);
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Landing />
      <Categories maindata={maindata} setProductData={setProductData} />
      <Product productData={productData} />
      <Footer />
    </div>
  );
}

export default App;
