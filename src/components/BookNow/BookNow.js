import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./BookNow.css"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      bookNow: file(relativePath: { eq: "book-now.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.bookNow?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <a
      href="https://www.breckenridge.com/plan-your-trip/ski-and-ride-lessons/category/private.aspx"
      target="_blank"
      rel="noreferrer"
    >
      <Img
        className="book-now center"
        fluid={data.bookNow.childImageSharp.fluid}
      />
    </a>
  )
}

export default Image
