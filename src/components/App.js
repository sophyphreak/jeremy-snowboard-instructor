import React from "react"
import ContactInfo from "./ContactInfo/ContactInfo"
import Headline from "./Headline/Headline"
import Body from "./Body/Body"
import "./App.css"

const App = () => (
  <div className="main">
    <ContactInfo />
    <Headline />
    <Body />
  </div>
)

export default App
