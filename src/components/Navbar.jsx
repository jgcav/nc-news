import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className="navBar">
            <div className="navContainer">
                <Link className="navLinks" to="/articles" style={{textDecoration: 'none'}}>
                    <h2>Articles</h2>
                </Link>
                <Link className="navLinks" to="/topics" style={{textDecoration: 'none'}}>
                    <h2>Topics</h2>
                </Link>
            </div>
        </div>
    )
}
