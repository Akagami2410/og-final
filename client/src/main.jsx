import { createRoot } from 'react-dom/client'
import Wrapper from './context/Wrapper.jsx'
import './footer.css';
import './App.css';
import './font.css';
import App from './App.jsx'
import Overlay from './components/Overlay.jsx'
import Popup from './components/Popup.jsx'
import ImageZoomPortal from './components/ImageZoomPortal.jsx' 
import { ZoomProvider } from './context/ZoomContext.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper>    
    <ZoomProvider> 
      <Overlay />
      <App />
      <Popup />
      <ImageZoomPortal /> 
    </ZoomProvider>
  </Wrapper>
)
