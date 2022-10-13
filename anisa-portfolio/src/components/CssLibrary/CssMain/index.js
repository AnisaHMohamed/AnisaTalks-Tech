import React from 'react'
import AnimationPreview from '../AnimationPreview'
import './style.css'

function Home()
{
  return (
    <>
    <p className="title">
    Welcome to a my CSS animations Libray!
  </p>
  <div className="AnimationList" >
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

  )
}

export default Home