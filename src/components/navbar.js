import React from "react"
import "./nav.css"
import {Link} from "gatsby"

const ListLink = props => (
        <li className="navLink">
                <Link activeClassName="active"
                        to={props.to}
                        className = "navText">
                        {props.children}
                </Link> 
        </li>   
    )

export default function Navbar() {
    return (
    <div>
        <header style={{ marginBottom: `6rem` }}>
            <Link to="/" className="title" style={{fontSize:'32px', fontWeight:'bold', textDecoration:'none'
            }}>TECH4BLM</Link>
            <ul className="navRight">
                <ListLink to="about">ABOUT</ListLink>
                <ListLink to="getInvolved">GET INVOLVED</ListLink>
                <ListLink to="contact">CONTACT</ListLink>
            </ul>
        </header>
    </div>
    )
}