import './style.css';
import {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import {animations} from './animations'

function CssLibrary() {
  // const [animationRoutes, setAnimationRoute] = useState(null)
 

  return (
    <div className="CssLibrary">
    <header className="CssLibrary-header">
    <Routes>
    <Route  path="/test" element={<Test/>}/>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/blink" element={blink}/>
    <Route  path="/border" element={border}/>
    <Route  path="/bounce" element={bounce}/>
    <Route  path="/breathe" element={breathe}/>
    <Route  path="/floatingBubble" element={floatingBubble}/>
    <Route  path="/glowingRingsOverlap" element={glowingRingsOverlap}/>
    <Route  path="/jiggle" element={jiggle}/>
    <Route  path="/pulse" element={pulse}/>
    <Route  path="/spin" element={spin}/>

    
    </Routes>
    </header>


    </div>
    );
}

export default CssLibrary;