import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

const About = () => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default About
