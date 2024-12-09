import Home from "./pages/home";
import FatProject from "./pages/fat-project";
import MindfulProject from "./pages/mindful-project";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./pages/scrollToTop";
import ScrollToTopButton from "./pages/scrollToTopButton";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
