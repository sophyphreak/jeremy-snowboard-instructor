import React from "react"

import "./Video.css"

const Video = () => (
  <p align="center" className="container">
    <iframe
      className="responsive-iframe"
      title="Jeremy Horn Snowboard Instructor at Breckenridge"
      src="https://www.youtube.com/embed/8pEoZVgXH8w"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    ></iframe>
    <div className="caption">
      Music: <a href="https://www.bensound.com">https://www.bensound.com</a>
    </div>
  </p>
)

export default Video
