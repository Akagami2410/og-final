import { useContext } from "react";
import OverlayContext from "../context/OverlayContext";

export default function Overlay() {
  const { overlayVisible } = useContext(OverlayContext);
  

  return (
    <div
      className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-[999] ${
        overlayVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!overlayVisible}
      
    />
  );
}
