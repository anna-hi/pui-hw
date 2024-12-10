import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Source = https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn
// scrolls to top when going to new page
const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
