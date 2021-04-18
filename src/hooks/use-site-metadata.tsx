import { graphql, useStaticQuery } from "gatsby"

export interface SiteMetadata {
  title: string
  description: string
  author: string
  siteUrl: string
  user: string
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          user
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
