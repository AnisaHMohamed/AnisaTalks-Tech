import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const AnimationPreview = ({ animationName }) =>
{

  return (
    <div className="animationContainer">
      <Link to={`/${ animationName }`}>
        <ul>
          <li>
            <div className="details">
              <p>
                {animationName}
              </p>
            </div>
          </li>
        </ul>
      </Link>
    </div>
  )
}

export default AnimationPreview