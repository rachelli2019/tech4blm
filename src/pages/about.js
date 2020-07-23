import React from "react"
import Navbar from "../components/navbar"
import "../styles/styles.css"
import blm from "../../static/images/blm.jpg"
import {Form, Button} from "react-bootstrap"

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="pageLayout">
      <figure>
        <img src={blm} style={{marginBottom:'0%'}}></img>
        <figcaption style={{fontSize:'14px'}}><span>Photo by <a href="https://unsplash.com/@claybanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Clay Banks</a> on <a href="https://unsplash.com/s/photos/social-issues?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></figcaption>
      </figure>
        <h1>About</h1>
        <p>Tech4BLM is a curated database of organizations working to create change at the intersection of social injustice and technology. 
        In light of recent events, we have focused on highlighting social justice organizations that address racial injustice and inequality, 
        advocate for policy reform in the prison and police systems, and work towards creating equal opportunity for marginalized peoples.</p>
        <div style={{marginTop:'5%'}}>
        <p>If you know of other organizations that are performing crucial work in these areas, please fill out the form below to suggest additions to our database. Thank you!</p>
        <Form name="addorg" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="addorg" />
        <Form.Group controlId="name">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control type="name" placeholder="Name of organization" />
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Website</Form.Label>
            <Form.Control type="email" placeholder="Link to organization website" />
        </Form.Group>
        <Form.Group controlId="message">
            <Form.Label>Additional Information</Form.Label>
            <Form.Control as="textarea" placeholder="Enter any additional information" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{backgroundColor:"#0D3B66", border: "none"}}>
            Submit
        </Button>
        </Form>
        </div>
      </div>
    </div>
  )
} 
