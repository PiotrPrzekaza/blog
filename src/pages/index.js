import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Programista bez Kodu</h1>
    <p>Witam na moim blogu!</p>
    <p>Czytaj, ucz się , zostaw komentarz!</p>
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              path={node.frontmatter.path}
              body={node.excerpt}
            />
          ))}
        </div>
      )
    }} />
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
        }
        excerpt
      }
    }
  }
}
`


export default IndexPage
