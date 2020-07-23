import React from "react"
import Navbar from "../components/navbar"
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/styles.css"
import {Form, Button} from "react-bootstrap"

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="pageLayout">
        <h1>Contact Us</h1>
        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name"/>
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{backgroundColor:"#0D3B66", border: "none"}}>
            Submit
        </Button>
        </Form>
        </div>
    </div>
  )
} 
