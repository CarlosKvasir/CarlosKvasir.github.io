export interface PostFrontmatter {
  title: string
  date: string
}

export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}
