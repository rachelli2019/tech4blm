import React from "react"
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const StyledFooter = styled.footer`
    ${'' /* margin: 0 auto; */}
    text-align: center;
    font-size: 70%;
`

export default function Footer() {
    return (
        <ScrollAnimation animateIn="animate__fadeIn" duration={2} delay={500}>
            <StyledFooter>Created using React JS & Gatsby.</StyledFooter>
        </ScrollAnimation>   
    )
}