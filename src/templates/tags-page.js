import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPageCounts } = pageContext
  return (
    <Layout pageTitle="App tags">
      <SEO
        title="All tags"
        keywords={["tags", "topics", "shortcuts", "subjects"]}
      />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPageCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
