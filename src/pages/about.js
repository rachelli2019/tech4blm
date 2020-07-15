import React from "react"
import Navbar from "../components/navbar"
import "../styles/styles.css"
import blm from "../../public/static/images/blm.jpg"

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="pageLayout">
        <img src={blm}></img>
        <h1>About</h1>
        <p>Tech4BLM is a curated database of organizations working to create change at the intersection of social injustice and technology. 
        In light of recent events, we have focused on highlighting social justice organizations that address racial injustice and inequality, 
        advocate for policy reform in the prison and police systems, and work towards creating equal opportunity for marginalized peoples.</p>

        <p>If you know of other organizations that are performing crucial work in these areas, please fill out the form below to suggest additions to our database. Thank you!</p>
      </div>
    </div>
  )
} 
