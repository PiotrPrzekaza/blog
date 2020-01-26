import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import devBooks from "../util/devBooks.js"
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  CardSubtitle,
  CardText,
  CardHeader,
} from "reactstrap"
import cleanCodeImg from "../images/books/CleanCode.jpg"
import { slugify } from "../util/utilityFunctions"

const DevLibPage = () => (
  <Layout pageTitle="Polecane Książki.">
    <SEO title="ksiażki" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={cleanCodeImg} style={{ maxWidth: "100%" }} alt="" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardHeader>
            <CardTitle>{devBooks[0].bookTitle}</CardTitle>
            <CardSubtitle>{devBooks[0].author}</CardSubtitle>
            <CardText> Moja ocena: {devBooks[0].myRank}</CardText>
          </CardHeader>
          <CardBody>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/books/${slugify(devBooks[0].simpleTitle)}`}
            >
              Zobacz Więcej
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default DevLibPage
