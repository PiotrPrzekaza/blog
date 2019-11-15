import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { slugify } from '../util/utilityFunctions'
import { graphql, Link } from 'gatsby'
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const authors = require('../util/authors');



const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter;
    const author = authors.find(x => x.name === post.author);

    const baseUrl = 'https://www.gatsbyjs.org/'
    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
            <SEO title={post.title} />
            <Card>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                <CardBody>
                    <CardSubtitle>
                        <span className="text-info">{post.date}</span> by{' '}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <ul className="post-tags">
                        {post.tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge color="primary">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
            <h3 className="text-center">Podziel się z innymi</h3>
            <div className="text-center social-share-links">
                <ul>
                    <li><a href={'https://www.facebook.com/sherer/sherer.php?u=' + baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer" className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a></li>
                    <li><a href="https://www.instagram.com/piotrprzekaza/" target="_blank" rel="noopener noreferrer" className="instagram">
                        <FontAwesomeIcon icon={faInstagram} className="instagram" />
                    </a></li>
                    <li><a href={'https://twitter.com/share?url=' + baseUrl + pageContext + '&text=' + post.title + '@PrzekazaPiotr'} target="_blank" rel="noopener noreferrer" className="twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a></li>
                    <li><a href={'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext} target="_blank" rel="noopener noreferrer" className="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a></li>
                </ul>
            </div>
        </Layout>
    )
}
export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image {
                    childImageSharp {
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
    }
    file(relativePath: {eq: $imageUrl}){
                childImageSharp{
                    fluid(maxWidth: 200){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
`

export default SinglePost