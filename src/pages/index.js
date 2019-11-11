import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'


const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Programista bez Kodu</h1>
    <p>Witam na moim blogu!</p>
    <p>Czytaj, ucz się , zostaw komentarz!</p>
    <Row>
      <Col md="8">
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          )
        }} />
      </Col>
      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
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
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
                slug
            }
        excerpt
      }
    }
  }
}
`


export default IndexPage
