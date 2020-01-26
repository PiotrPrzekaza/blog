import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import meImage from "../images/me.jpg"
import { slugify } from "../util/utilityFunctions"

const AboutPage = () => (
  <Layout pageTitle="Piotr Przekaza">
    <SEO title="O Mnie" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={meImage}
          style={{ maxWidth: "100%" }}
          alt="Piotr Przekaza Profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              Zobacz wpisy
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default AboutPage
