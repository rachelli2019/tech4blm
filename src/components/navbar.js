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
            <p className="title" style={{fontSize:'32px', fontWeight:'bold'}}>SOMETITLE</p>
            <ul className="navRight">
                <ListLink to="about">ABOUT</ListLink>
                <ListLink to="about">COLLABORATE</ListLink>
                <ListLink to="contact">CONTACT</ListLink>
            </ul>
        </header>
    </div>
    )
}