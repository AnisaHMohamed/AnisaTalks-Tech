import BlinkAnimation from "./BlinkAnimation"
import BorderAnimation from "./BorderAnimation"
import BounceAnimation from "./BounceAnimation"
import BreatheAnimation from "./BreatheAnimation"
import FloatingBubbleAnimation from "./FloatingBubbleAnimation";
import GlowingRingsOverlapAnimation from "./GlowingRingsOverlapAnimation"
import JiggleAnimation from "./JiggleAnimation"
import PulseAnimation from "./PulseAnimation"
import SpinAnimation from "./SpinAnimation"



const animations = {
    Blink: BlinkAnimation,
    Border: BorderAnimation,
    Bounce: BounceAnimation,
    Breathe: BreatheAnimation,
    FloatingBubble: FloatingBubbleAnimation,
    GlowingRingsOverlap: GlowingRingsOverlapAnimation,
    Jiggle: JiggleAnimation,
    Pulse: PulseAnimation,
    Spin: SpinAnimation,
}
const animationDetails = {
    Blink: {
        description: "Blinks to bring attention",
        css: ".blink { content:''; height: 40px; width: 40px; border-radius: 50%; background: hotpink; animation: blinker 1s linear infinite; }",
        keyframe: " blinker {50% {opacity: 0;}}"
    },
    Border: {
        description: "A stylish glowing border",
        css: ".container { display: flex; justify-content: center; align-items: center; width: 100px; min-height: 100px; } .box { position: relative; width: 200px; height: 100px; background: #282c33; border-radius: 20px; display: flex; justify-content: center; align-items: center; overflow: hidden; } .box::after { content: ''; position: absolute; width: 500px; height: 500px; background-image: conic-gradient(   transparent,   transparent,   transparent,   hotpink ); animation: border 4s linear infinite; animation-delay: -2s; } .box::before { content: ''; position: absolute; width: 500px; height: 500px; background-image: conic-gradient(   transparent,   transparent,   transparent,   #00ccff ); animation: border 4s linear infinite; } .box span { position: absolute; inset: 5px; background: #282c34; z-index: 1; border-radius: 16px; } .box h2 {   position: relative;   z-index: 2; }",
        keyframe: "@keyframes  border { 0% {   transform: rotate(0deg); } 100% {   transform: rotate(360deg); } }"
    },
    Blink: {
        description: "Blinks to bring attention",
        css: ".blink { content:''; height: 40px; width: 40px; border-radius: 50%; background: hotpink; animation: blinker 1s linear infinite; }",
        keyframe: "@keyframes  blinker {50% {opacity: 0;}}"
    },
    Bounce: {
        description: "Bounces to bring attention",
        css: ".bounce { content: ''; background-color: #81f4e1; height: 50px; margin: 0 auto 0 auto; width: 50px; animation: bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;}",
        keyframe: "@keyframes bounce { 0% { transform: scale(1, 1) translateY(0); } 10% { transform: scale(1.1, 0.9) translateY(0); } 30% { transform: scale(0.9, 1.1) translateY(-100px); } 50% { transform: scale(1.05, 0.95) translateY(0); } 57% { transform: scale(1, 1) translateY(-7px); } 64% { transform: scale(1, 1) translateY(0); } 100% { transform: scale(1, 1) translateY(0); } }"
    },
    Breath: {
        description: "Simulates a calming breath movement",
        css: '.breathe { width: 100px; height: 100px; border-radius: 50%; animation-name: breath-animation; animation: breath-animation 7s infinite; }',
        keyframe: "@keyframes breath-animation {0% {background-color: lightgrey;   width: 100px;height: 100px;} 25% {background-color: lightblue;  width: 50px;height: 50px; }50% {background-color: lightgrey;   width: 100px;height: 100px;}50% {background-color: lightblue;  width: 50px;height: 50px; }100% {background-color: lightgrey;   width: 100px;height: 100px;} "
    },
    FloatingBubble: {
        description: "Simulates a calming breath movement",
        css: '.container {   position: relative;   width: 100%;   overflow: hidden; } .bubbles {   position: relative;   display: flex; } .bubbles span {   position: relative;   width: 30px;   height: 30px;   background: #ff6bb5;   margin: 0 4px;   border-radius: 50%;   box-shadow: 0 0 0 10px #ff6bb544, 0 0 50px #ff6bb5, 0 0 100px #ff6bb5;   animation: bubble 15s linear infinite;   animation-duration: calc(125s / var(--i)); } .bubbles span:nth-child(even) {   background: #81f4e1;   box-shadow: 0 0 0 10px #81f4e144, 0 0 50px #81f4e1, 0 0 100px #81f4e1; }',
        keyframe: "@keyframes bubble { 0% {   transform: translateY(100vh) scale(0); } 100% {   transform: translateX(-10vh) scale(1); } }"
    },
    GlowingRingsOverlap: {
        description: "Glowing rings loader or transition",
        css: `.ringContainer {top: 100px;width: 100%;position: relative;display: flex;justify-content: center;align-items: center;margin-bottom: 30px; } .ringContainer .ring {position: relative;height: 150px;width: 150px;margin: -30px;border-radius: 50%;border: 4px solid transparent;border-top: 4px solid teal;animation: rotate 3s linear infinite; } .ringContainer .ring::before {content: '';position: absolute;top: 12px;right: 12px;width: 15px;height: 15px;border-radius: 50%;background: #24ecff;box-shadow: 0 0 0 5px #24ecff33, 0 0 0 10px #24ecff22, 0 0 0 20px #24ecff11,  0 0 20px #24ecff, 0 0 50px #24ecff; } .ringContainer .ring:nth-child(2) {animation: rotate2 4s linear infinite;animation-delay: -1s;border-top: 4px solid transparent;border-left: 4px solid #93ff2d; } .ringContainer .ring:nth-child(2)::before {content: '';position: absolute;top: initial;bottom: 12px;left: 12px;border-radius: 50%;width: 15px;height: 15px; height: 15px; background: #93ff2d;
        box-shadow: 0 0 0 5px #93ff2d33, 0 0 0 10px #93ff2d22, 0 0 0 20px #93ff2d11, 0 0 20px #93ff2d, 0 0 50px #93ff2d; } .ringContainer .ring:nth-child(3) {animation: rotate2 4s linear infinite;animation-delay: -3s;position: absolute;top: -66.66px;border-top: 4px solid transparent;border-left: 4px solid #e11cf8; } .ringContainer .ring:nth-child(3)::before {content: '';position: absolute;top: initial;bottom: 12px;left: 12px;border-radius: 50%;width: 15px;height: 15px;background: #e11cf8;box-shadow: 0 0 0 5px #e11cf833, 0 0 0 10px #e11cf822, 0 0 0 20px #e11cf811,  0 0 20px #e11cf8, 0 0 50px #e11cf8; }`,
        keyframe: "@keyframes rotate { from {   transform: rotate(0deg); } to {   transform: rotate(360deg); }}, @keyframes rotate2 { from {   transform: rotate(360deg); }to {    transform: rotate(0deg);  } }"
    },
    Jiggle: {
        description: "Jiggles to bring attention",
        css: ".jiggle {border-radius: 50%;content: '';height: 40px;width: 40px;background: hotpink;animation: jiggle infinite 1s alternate ease-out;}",
        keyframe: "@keyframes jiggle {0% {  transform: scaleX(1);} 40% {  transform: scaleX(1.12) scaleY(0.75);} 55% {  transform: scaleX(0.85) scaleY(1);} 65% {  transform: scaleX(1.09) scaleY(0.85);} 75% {  transform: scaleX(0.9) scaleY(1);} 90% {  transform: scaleX(1.05) scaleY(0.95);} 100% {  transform: scaleX(1) scaleY(1);} }"
    },
    Pulse: {
        description: "Pulses to bring attention",
        css: ".Pulse {content: ''; height: 50px; width: 50px; margin: 0 auto; border-radius: 100%; background-color: hotpink; animation: stretch 2s ease-out infinite alternate; }",
        keyframe: "@keyframes stretch { 0% {   transform: scale(0.5); } 50% {   transform: scale(1); }  100% {   transform: scale(0.5); }}"
    },
    Spin: {
        description: "Rotates an image in a circle in a smooth transistion",
        css: 'animation: arrow-spin infinite 5s linear;',
        keyframe: " @media (prefers-reduced-motion: no-preference) { .arrow { animation: arrow-spin infinite 5s linear; }} @keyframes arrow-spin { from { transform: rotate(360deg);}to {transform: rotate(0deg);}}' }"
    },

}
export { animations, animationDetails };