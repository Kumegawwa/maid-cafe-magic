import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo (0, 0) sempre que o caminho (pathname) mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}