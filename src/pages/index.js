import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

import CardGrid from "../components/cardGrid"
import Navbar from "../components/navbar"
import Footer from  "../components/footer"

const IndexPage = () => (
    <div>
        <Navbar/>
        <CardGrid/>
    </div>
)

export default IndexPage
