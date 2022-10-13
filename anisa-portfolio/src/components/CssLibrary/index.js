import "./style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const CssLibrary = () => {
  // const [animationRoutes, setAnimationRoute] = useState(null)
  return (
    <div className="CssLibrary">
      <header className="CssLibrary-header">
        <Routes>
          <Route path="/css/" element={<Home />} />
          <Route path="/css/blink" element={blink} />
          <Route path="/css/border" element={border} />
          <Route path="/css/bounce" element={bounce} />
          <Route path="/css/breathe" element={breathe} />
          <Route path="/css/floatingBubble" element={floatingBubble} />
          <Route path="/css/glowingRingsOverlap" element={glowingRingsOverlap} />
          <Route path="/css/jiggle" element={jiggle} />
          <Route path="/css/pulse" element={pulse} />
          <Route path="/css/spin" element={spin} />
        </Routes>
      </header>
    </div>
  );
};

export default CssLibrary;
