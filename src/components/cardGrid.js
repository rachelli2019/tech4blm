import React from "react"
import styled, {css} from "styled-components"
import Card from "./card"
import {info, taglist} from "../constants/info"
import {YELLOW, RED, TEAL, LIGHTBLUE, DARKBLUE, COLOR6, COLOR7, COLOR8} from "../constants/colors"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class CardGrid extends React.Component {

    state = {
        filters: [],
        buttonColors: {
            yellow: true,
            red: false,
            teal:false,
            lightblue:false,
            darkblue: false,
            color6: false,
            color7: false,
            color8: false,
        },
    }

    componentDidMount() {
        this.setState({
            filters: ["all"],
        })
    }

    createCard(id) {
        console.log(info)
        let org = info[id];
        console.log(org)
        return (
            <ScrollAnimation animateIn="animate__flipInX">
                <Card 
                    image= {org.image}
                    title={org.title}
                    link={org.link}
                    contact={org.contact}
                    donate={org.donate}
                    desc={org.desc}
                    class = "animate__zoomIn"
                />
            </ScrollAnimation>
        )
    }
    
    isTagged(org) {
        let filters = this.state.filters;
        var i;
        for (i = 0; i < filters.length; i++) {
            if (filters[i] === "all") {
                return true
            }
            else if (org.includes(filters[i])) {
                return true
            }
        }
        return false
    }

    getCardsByFilter(){
        // let filteredOrgs = taglist.filter(this.isTagged())
        var filtered = Object.fromEntries(Object.entries(taglist).filter(([k,v]) => this.isTagged(v)));
        var cards = [];
        // sort the keys in alphabetical order
        var keys = Object.keys(filtered)
        var sortedKeys = keys.sort()
        // create card instances
        sortedKeys.map(x => cards.push(this.createCard(x)))
        console.log("filterCards", cards)
        return cards
    }

    handleTagClick(filter, color) {
        console.log("inside handleTagClick", filter, color)
        // if the filter is currently in the state, remove it
        var ind;
        let active_filters = this.state.filters
        if (active_filters.includes(filter)) {
            ind = active_filters.indexOf(filter)
            active_filters.splice(ind, 1)
        }
        else {
            active_filters.push(filter)
        }
        console.log("new filters", active_filters)
        this.toggleButton(color)
        this.setState({filters:active_filters})
       // figure out how to toggle clicked status of each button
    }

    toggleButton(color) {
        var buttonStatus = this.state.buttonColors
        let active = buttonStatus[color]
        buttonStatus[color] = !active
        console.log("button click", buttonStatus)
        this.setState({buttonColors: buttonStatus})
        console.log("after click", this.state)
    }

    render() {
        const StyledCardGrid = styled.div`
            display: grid;
            grid-template-columns: auto auto auto auto;
            margin: 60px;
            margin-top: 20px;
            column-gap: 0;
            row-gap: 30px;
        `
        const StyledTagButton = styled.button`
            border-radius: 15px; 
            background-color: white;
            padding: 0px 20px;
            margin: 10px;
            :hover {
                color: white;
            }
            ${props => props.yellow && css`
                color: YELLOW;
                border: 2px solid;
                :hover {
                    background-color: YELLOW;
                }
            `}
            ${props => props.red && css`
                color: RED;
                border: 2px solid;
                :hover {
                    background-color: RED;
                }
            `}
            ${props => props.teal && css`
                color: TEAL;
                border: 2px solid;
                :hover {
                    background-color: TEAL;
                }
            `}
            ${props => props.darkblue && css`
                color: DARKBLUE;
                border: 2px solid;
                :hover {
                    background-color: DARKBLUE;
                }
            `}
            ${props => props.lightblue && css`
                color: LIGHTBLUE;
                border: 2px solid;
                :hover {
                    background-color: LIGHTBLUE;
                }
            `}
            ${props => props.color6 && css`
                color: COLOR6;
                border: 2px solid;
                :hover {
                    background-color: COLOR6;
                }
            `}
            ${props => props.color7 && css`
                color: COLOR7;
                border: 2px solid;
                :hover {
                    background-color: COLOR7;
                }
            `}
            ${props => props.color8 && css`
                color: COLOR8;
                border: 2px solid;
                :hover {
                    background-color: COLOR8;
                }
            `}
        `

        const StyledTagContainer = styled.div`
            text-align: center;
            margin: 30px;
        `
        let cards = this.getCardsByFilter();
        return (
            <div>
            <StyledTagContainer>
                <StyledTagButton yellow onClick = { () => this.handleTagClick("all", "yellow")} style={{
                    backgroundColor: this.state.buttonColors.yellow? YELLOW : 'white', 
                    color: this.state.buttonColors.yellow? 'white' : YELLOW, 
                    }}>All</StyledTagButton> 
                <StyledTagButton red onClick = { () => this.handleTagClick("police reform", "red")} style={{
                    backgroundColor: this.state.buttonColors.red? RED : 'white', 
                    color: this.state.buttonColors.red? 'white' : RED, 
                    }}>Police Reform</StyledTagButton>
                <StyledTagButton teal onClick = { () => this.handleTagClick("voting", "teal")} style={{
                    backgroundColor: this.state.buttonColors.teal? TEAL : 'white', 
                    color: this.state.buttonColors.teal? 'white' : TEAL, 
                    }}>Voting</StyledTagButton>
                <StyledTagButton lightblue onClick = { () => this.handleTagClick("prison reform", "lightblue")} style={{
                    backgroundColor: this.state.buttonColors.lightblue? LIGHTBLUE : 'white', 
                    color: this.state.buttonColors.lightblue? 'white' : LIGHTBLUE, 
                    }}>Prison Reform</StyledTagButton>
                <StyledTagButton darkblue onClick = { () => this.handleTagClick("equal opportunity", "darkblue")} style={{
                    backgroundColor: this.state.buttonColors.darkblue? DARKBLUE : 'white', 
                    color: this.state.buttonColors.darkblue? 'white' : DARKBLUE, 
                    }}>Equal Opportunity</StyledTagButton>
                <StyledTagButton color6 onClick = { () => this.handleTagClick("racial injustice", "color6")} style={{
                    backgroundColor: this.state.buttonColors.color6? COLOR6 : 'white', 
                    color: this.state.buttonColors.color6? 'white' : COLOR6, 
                    }}>Racial Injustice</StyledTagButton>
                <StyledTagButton color7 onClick = { () => this.handleTagClick("covid-19", "color7")} style={{
                    backgroundColor: this.state.buttonColors.color7? COLOR7 : 'white', 
                    color: this.state.buttonColors.color7? 'white' : COLOR7, 
                    }}>Covid-19</StyledTagButton>
                <StyledTagButton color8 onClick = { () => this.handleTagClick("data", "color8")} style={{
                    backgroundColor: this.state.buttonColors.color8? COLOR8 : 'white', 
                    color: this.state.buttonColors.color8? 'white' : COLOR8, 
                    }}>Data Science & Tech</StyledTagButton>    
            </StyledTagContainer>
            
            <StyledCardGrid>
                {cards}
            </StyledCardGrid>

            </div>
        )
    }
}

export default CardGrid;

{/* <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto', margin: '20px', columnGap: '10px;', rowGap: '30px'}}></div> */}