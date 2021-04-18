import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { ReactNode } from "react"
import { RouterProps } from "@reach/router"

import Layout from "../Layout"
import { PostQueryData } from "../../interfaces/PostQuery.interface"

export const query = graphql`
  query PostByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

type PostPageProps = {
  data: PostQueryData
  props: RouterProps
  children?: ReactNode
}

const PostLayout: React.FC<PostPageProps> = ({ data, ...props }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default PostLayout
