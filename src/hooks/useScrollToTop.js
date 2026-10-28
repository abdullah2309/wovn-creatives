import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

function useScrollToTop() {
  const { pathname } = useLocation();
  // 28-
  const test = "test";
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

export default useScrollToTop;
