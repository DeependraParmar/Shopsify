import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </>
  )
}

export default App;