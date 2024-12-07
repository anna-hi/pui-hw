import Home from "./pages/home";
import FatProject from "./pages/fat-project";
import MindfulProject from "./pages/mindful-project";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/scrollToTop";
import ScrollToTopButton from "./pages/scrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="pui-hw/final-project1/" exact element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/FatProject" element={<FatProject />} />
        <Route path="/MindfulProject" element={<MindfulProject />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
