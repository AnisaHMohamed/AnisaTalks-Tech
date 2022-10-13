import AnimationPreview from "../AnimationPreview";
import Header from "../../Header";
import "./style.css";

const CssMain = () => {
  return (
    <>
    <Header activeTab={'Css'}/>
    <p className="title">Let's talk CSS animations!</p>
      <div className="AnimationList">
        <AnimationPreview animationName={"Blink"} />
        <AnimationPreview animationName={"Border"} />
        <AnimationPreview animationName={"Bounce"} />
        <AnimationPreview animationName={"Breathe"} />
        <AnimationPreview animationName={"FloatingBubble"} />
        <AnimationPreview animationName={"GlowingRingsOverlap"} />
        <AnimationPreview animationName={"Jiggle"} />
        <AnimationPreview animationName={"Pulse"} />
        <AnimationPreview animationName={"Spin"} />
      </div>
    </>
  );
};

export default CssMain;
