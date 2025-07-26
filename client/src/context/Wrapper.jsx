import {useState} from "react";
import OverlayContext from "./OverlayContext";

 const ContextWrapper = ({ children }) => { 
    const [overlayVisible, setOverlayVisible] = useState(false);


    return (
        <OverlayContext.Provider value={{ overlayVisible, setOverlayVisible }}>
            {children} 
        </OverlayContext.Provider>   
    )

}

export default ContextWrapper;

