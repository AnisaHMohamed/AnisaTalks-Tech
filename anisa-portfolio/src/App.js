import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { animations } from "./components/CssLibrary/animations";
import CssMain from "./components/CssLibrary/CssMain";
import Home from "./components/Home";

import "./App.css";
const App = () => {
  const [position, setPosition] = useState({});

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    setPosition({
      ...position,
      stars: { left: `${0.25 * value}px` },
      moon: { top: `${1.05 * value}px` },
      mountains_behind: { top: `${0.5 * value}px` },
      mountains_front: { top: `${0 * value}px` },
      text: { marginRight: `${4 * value}px`, marginTop: `${1.5 * value}px` },
      btn: { marginTop: `${1.5 * value}px` },
      header: { top: `${0.5 * value}px` },
    });
    console.log(position);
  });
  const animationRoutes = [];

  useEffect(() => {
    console.log(animations);
  }, []);
  for (let animation in animations) {
    let currentAnimation = animations[animation];
    console.log(currentAnimation);
    animationRoutes.push(
      `<Route  path="/${animation}" element={${currentAnimation}}/>`
    );
  }
  console.log(animationRoutes, "<--");
  let blink = animations["Blink"]();
  let border = animations["Border"]();
  let bounce = animations["Bounce"]();
  let breathe = animations["Breathe"]();
  let floatingBubble = animations["FloatingBubble"]();
  let glowingRingsOverlap = animations["GlowingRingsOverlap"]();
  let jiggle = animations["Jiggle"]();
  let pulse = animations["Pulse"]();
  let spin = animations["Spin"]();

  return (
    <div className="App">
      <BrowserRouter>
        <header className="CssLibrary-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/css" element={<CssMain />} />
            <Route path="/css/blink" element={blink} />
            <Route path="/css/border" element={border} />
            <Route path="/css/bounce" element={bounce} />
            <Route path="/css/breathe" element={breathe} />
            <Route path="/css/floatingBubble" element={floatingBubble} />
            <Route
              path="/css/glowingRingsOverlap"
              element={glowingRingsOverlap}
            />
            <Route path="/css/jiggle" element={jiggle} />
            <Route path="/css/pulse" element={pulse} />
            <Route path="/css/spin" element={spin} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
};

export default App;
