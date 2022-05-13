import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
