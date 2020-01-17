import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, date, author, slug, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={slug}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> Autor:{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-lg-right">
          Czytaj dalej ...
        </Link>
      </CardBody>
    </Card>
  )
}
export default Post
