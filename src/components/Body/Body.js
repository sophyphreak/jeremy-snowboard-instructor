import React from "react"

import Video from "../Video/Video"
import BookNow from "../BookNow/BookNow"
import BookingImage from "../BookingImage/BookingImage"

import "./Body.css"

const Body = () => (
  <div className="main">
    <h2 className="text-center">
      Get the most out of your Breckenridge snowboarding experience!
    </h2>
    <p>Hi, I'm Jeremy!</p>
    <Video />
    <p>
      Click the link below to book now! You will be redirected to the
      Breckenridge Ski and Snowboard School website.
    </p>
    <p>
      In step 1 of the checkout process, “Configure Your Products” You will be
      given the option to “Request a Specific Instructor”. That’s where you put
      my name, Jeremy Horn into the box!
    </p>
    <BookNow />
    <h2>Detailed Booking Instructions</h2>
    <hr />
    <p>
      After selecting “checkout” you will be asked to provide your name and date
      of birth.
    </p>
    <p>
      You will then be sent to this page. Scroll down to get to “Request a
      Specific Instructor”. Then write “Jeremy Horn” into that box!
    </p>
    <BookingImage />
  </div>
)

export default Body
