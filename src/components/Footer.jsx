import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <ul>
                <Link className="footerLink" to="/articles" style={{textDecoration: 'none'}}>
                    <li>Articles</li>
                </Link>
                <Link className="footerLink" to="/topics" style={{textDecoration: 'none'}}>
                    <li>Topics</li>
                </Link>
            </ul>
        </footer>
    )
}
