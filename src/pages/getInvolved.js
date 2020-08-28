import React from "react"
import Navbar from "../components/navbar"
import "../styles/styles.css"

export default function getInvolved() {
  return (
    <div>
      <Navbar/>
      <div className="pageLayout">
        <h1>Get Involved</h1>
        <p>Exciting opportunities to use data science for social justice work! Projects are flexible and will run throughout the Fall 2020 semester. </p>
        <p><b>If interested, please fill out <a href="https://forms.gle/z7R8JSGyksvz9825A" target="_blank">this Google Form</a> by 9/4.</b></p>
        <p>
        <h3>Impact Justice</h3>
        <a href="https://impactjustice.org/" target="_blank">Impact Justice</a> is a nonprofit organization focused on criminal justice reform. 
        The Research and Action Center (RAC) serves as the research arm of the organization, 
        and conducts research on evaluating governmental and community-based organizations,
         analyzing disparities in the criminal justice system across race, gender, and sexual orientation, 
         and providing training and technical assistance around data management and processes for partner agencies and organizations. </p>
         <p> <b>Project Description: </b>The RAC is seeking assistance for a current project that is looking at crime and safety during the COVID-19 pandemic. 
         In this exploratory project, we are tracking weekly arrest trends and comparing these trends to the previous year. 
         We are looking for someone to help create and maintain a dataset on arrest trends between 2019 and 2020 and, 
         if possible, begin analyzing this data. 
        </p>
        <h3>The Leadership Conference on Civil and Human Rights</h3>
        <p><a  href="https://civilrights.org/" target="_blank">The Leadership Conference on Civil and Human Rights </a>is a coalition charged by its diverse membership of more than 200 national 
        organizations to promote and protect the civil and human rights of all persons in the United States. 
        Through advocacy and outreach to targeted constituencies, 
        The Leadership Conference works toward the goal of a more open and just society – an America as good as its ideals.</p>
        <p><b>Project Description: </b>Accountable Now is a project for which we are building a web tool to analyze and visualize police data.
         This is being created as a resource for advocates, media, experts, and policy makers. 
         Student volunteers can be very helpful to us by scraping public data, 
         and working with our web developers to input the collected data to the site.</p>
        </div>
    </div>
  )
} 
