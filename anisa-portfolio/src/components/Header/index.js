import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'

function Header({top})
{
    return (
        <header style={top} className="App-header">
            <a
                className="logo"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                Anisa Talks Tech
            </a>
            <ul>
                <li>
                    <a href="#" className="active">Home</a>
                </li>
                <li>
                    <a href="/css">About</a>
                </li>
                <li>
                    <a href="#">Work</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </header>

    )
}

export default Header