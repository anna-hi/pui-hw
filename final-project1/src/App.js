import Home from "./pages/homepage/home";
import FatProject from "./pages/projects/fat-project";
import MindfulProject from "./pages/projects/mindful-project";
import PenellaProject from "./pages/projects/penella-project";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import ScrollToTopButton from "./pages/components/scrollToTopButton";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="pui-hw/final-project1/" exact element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/FatProject" element={<FatProject />} />
        <Route path="/MindfulProject" element={<MindfulProject />} />
        <Route path="/PenellaProject" element={<PenellaProject />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
    </HashRouter>
  );
}

export default App;
