
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";    
import Contact from "./Contact";

const React_Router = () => {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>    
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default React_Router
