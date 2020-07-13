import React from 'react';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import ReadMore from './ReadMore';

const StyledCard = styled.div`
    width: 375px;
    height: 375px;
    ${'' /* border: 1px solid black; */}
    justify-self: center;
`
const StyledPic = styled.img`
    width: 330px;
    margin: 10px 12.5px 10px 12.5px;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    :hover {
        width: 350px;
        z-index: 3;
        transform: translateZ(10px);
        opacity: 0.7;
    }
`
const StyledPicContainer = styled.div`
    height: 170px;
    width: 500px;
`

const StyledDescription = styled.p`
    width: 330px;
    text-align: left;
    margin: 8px 20px;
    ${'' /* height: 100px; */}
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    color: #495867;
`
const StyledTitle = styled.a`
    display: inline-block;
    margin: 0px 20px;
    font-weight: bold;
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    text-decoration: none;
    color: black;
    :hover {
        color: #00798C;
        text-decoration: none;
    }
`


export default function Card({image, title, link, contact, donate, desc}) {
    let charLimit = 100;
    let descHeight = '80px';
    if (title.length > 40) {
        charLimit = 65;
        descHeight = '50px';
    }
    let insertDesc = desc? desc : "Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser."
    console.log(insertDesc)
    return(
    <StyledCard>
        <StyledPicContainer>
            <StyledPic src={image}></StyledPic>
            {/* <StyledPic src={images[image]}></StyledPic> */}
        </StyledPicContainer>
        <StyledTitle href={link} target="_blank">{title}</StyledTitle>
        <StyledDescription>
        <ReadMore 
          text={insertDesc}
          lineHeight={1.4}
          showLessButton={true}
          readMoreCharacterLimit={charLimit}
          descHeight = {descHeight}
        />
        </StyledDescription>
        <Button variant="outline-info" size='sm' style={{marginLeft: '100px', marginRight: '20px'}} href={contact} target="_blank">Contact</Button>
        <Button variant="outline-success" size='sm' href={donate} target="_blank">Donate</Button>
    </StyledCard>
    )
}

