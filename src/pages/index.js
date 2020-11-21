import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey people, I'm Jeremy</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/T1zEBh5HLH8?start=769" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
    <p>I love snowboarding, and I want you to love it too. Join me and we'll make magic together.</p>
  </Layout>
)

export default IndexPage
