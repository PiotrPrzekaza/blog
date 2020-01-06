import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import authors from "../util/authors"
import { graphql } from "gatsby"

const authorPost = ({ data, pageContext }) => {}
export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default authorPost
