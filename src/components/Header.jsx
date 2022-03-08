import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className="headerLink" to="/" style={{textDecoration: 'none'}}>
            <h1>JC News</h1>
            </Link>
        </header>
    )
}
