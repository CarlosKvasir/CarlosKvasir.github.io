import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

import Layout from "../components/Layout"


const About = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <section className="content">
        <h1>
          🔥 WIP , {author} need work more..
        </h1>
      </section>
    </Layout>
  )
}

export default About
