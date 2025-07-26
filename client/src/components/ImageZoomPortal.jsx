import { useContext } from "react";
import ZoomContext from "../context/ZoomContext";

export default function ImageZoomPortal() {
  const { zoomedImage, setZoomedImage } = useContext(ZoomContext);

  if (!zoomedImage) return null; // Don’t show anything if nothing is zoomed

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
      onClick={() => setZoomedImage(null)} // Click anywhere to close
    >
      <img 
        src={zoomedImage}
        alt="Zoomed"
        className="max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-500 scale-100"
      />
    </div>
  );
}
