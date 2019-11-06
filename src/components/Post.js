import React from 'react'
import { Link } from 'gatsby'
import { Card, CardText, CardTitle, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'

const Post = ({ title, date, author, path, body, fluid }) => {
    return (
        <Card>
            <Link to={path}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={path}>
                        {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by{' '}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path} className="btn btn-outline-primary float-lg-right">Read more</Link>
            </CardBody>
        </Card>
    )
}
export default Post;