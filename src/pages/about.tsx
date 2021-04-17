import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

import Layout from "../components/Layout"

import profileImage from "../assets/carlos.png"
import logoGitHub from "../assets/github.svg"
import logoTwitter from "../assets/twitter.svg"
import logoLinkedin from "../assets/linkedin.svg"

const About = () => {
  const { author, user } = useSiteMetadata()

  return (
    <Layout>
      <section className="content">
        <picture>
          <img
            className="carlos-image"
            src={profileImage}
            alt={`${author} Profile Picture`}
          />
        </picture>
        <h1>
          Hello, I’m <strong>{author}</strong>.
        </h1>
        <div className="links">
          <a
            href={`https://github.com/${user}`}
            target="_blank"
            rel="noopener"
          >
            <img src={logoGitHub} alt="GitHub logo" />
            GitHub
          </a>
          <a
            href={`https://twitter.com/${user}`}
            target="_blank"
            rel="noopener"
          >
            <img src={logoTwitter} alt="Twitter logo" />
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/in/${user}/`}
            target="_blank"
            rel="noopener"
          >
            <img src={logoLinkedin} alt="Linkedin logo" />
            Linkedin
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default About
