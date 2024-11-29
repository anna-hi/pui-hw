import Home from "./pages/home";
import FatProject from "./pages/fat-project";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FatProject" element={<FatProject />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
