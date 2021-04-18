import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyles from "./footer.module.scss"

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        {" "}
        Made with{" "}
        <span role="img" aria-label="coffee">
          ☕
        </span>{" "}
        by {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
