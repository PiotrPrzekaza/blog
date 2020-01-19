import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import devBooks from "../util/devBooks"
import { graphql } from "gatsby"

const bookPage = ({ data, pageContext }) => {

  return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={book}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </Layout>
  )
}

export default bookPage
