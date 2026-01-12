// src/AnalyticsTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-QGEFZEX991", {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  return null;
}
