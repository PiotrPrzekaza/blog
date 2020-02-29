import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => {
    const postPerPage = 2
    let numberOfPages

    return (
        <Layout pageTitle="devHot - Programista bez Kodu">
            <SEO title="Blog" />
            <h3>Witam na moim blogu!</h3>
            <h4>Czytaj, ucz się , zostaw komentarz!</h4>
            <StaticQuery
                query={indexQuery}
                render={data => {
                    numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postPerPage)
                    return (
                        <div>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Post
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    author={node.frontmatter.author}
                                    date={node.frontmatter.date}
                                    slug={node.fields.slug}
                                    body={node.excerpt}
                                    fluid={node.frontmatter.image.childImageSharp.fluid}
                                    tags={node.frontmatter.tags}
                                />
                            ))}
                            <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
                        </div>
                    )
                }}
            />
        </Layout>
    )
}

const indexQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MM YYYY")
                        author
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
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
    }
`

export default IndexPage
