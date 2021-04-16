import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <React.Fragment>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
