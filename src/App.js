import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

// 1. IMPORT THE NEW COMPONENT
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      {/* 2. ADD THE ScrollToTop COMPONENT HERE */}
      <ScrollToTop /> 
      
      <Navbar />  {/* Always visible */}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Your Footer component can go here if you have one */}
      <Footer />
      
    </Router>
  );
}

export default App;