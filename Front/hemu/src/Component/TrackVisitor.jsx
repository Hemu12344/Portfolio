import { useEffect } from "react";
import axios from "../api/axios"; // or import axios from "axios"

export default function TrackVisitor() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    axios
      .post(`${API_URL}/track-visit`, {
        page: window.location.pathname,
        userAgent: navigator.userAgent,
      })
      .catch((err) => console.error("Visitor tracking failed:", err));
  }, []);

  return null;
}
