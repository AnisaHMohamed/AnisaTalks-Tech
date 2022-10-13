import React, {useState, useEffect} from 'react'
import {animations, animationDetails} from '../animations'
const AnimationPreview = ({animationName}) => {
  const [description, setDescription] = useState('none')
  const [css, setCss] = useState('none')
  const [keyframe, setKeyframe] = useState('none')
  let currentAnimation = animations[animationName]
 useEffect(() =>{
  if (animationName && animationDetails[animationName] ) {
    setDescription(animationDetails[animationName].description)
    setCss(animationDetails[animationName].css)
    setKeyframe(animationDetails[animationName].keyframe)
  }
  
 },[animationName]
 )
  return (
    <>
    <div>{animationName}</div>
    <div>{description}</div>
    {currentAnimation()}
    <div>{css}</div>
    <div>{keyframe}</div>
    <div>Button to Click to Full Page animation</div>
    </>
    )
}

export default AnimationPreview