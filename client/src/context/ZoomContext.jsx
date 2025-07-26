// context/ZoomContext.jsx
import { createContext, useState } from "react";

const ZoomContext = createContext();

export function ZoomProvider({ children }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <ZoomContext.Provider value={{ zoomedImage, setZoomedImage }}>
      {children}
    </ZoomContext.Provider>
  );
}

export default ZoomContext;
