import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

import profileImage from "../assets/carlos.png"
import logoGitHub from "../assets/github.svg"
import logoTwitter from "../assets/twitter.svg"
import logoLinkedin from "../assets/linkedin.svg"

const About = () => {
  const { title, description } = useSiteMetadata()

  return (
    <section className="content">
      <picture>
        <img
          className="carlos-image"
          src={profileImage}
          alt="Carlos’ Profile Picture"
        />
      </picture>
      <h1>
        Hello, I’m <strong>Carlos Lima</strong>, aka carloskvasir.
      </h1>
      <div className="links">
        <a
          href="https://github.com/carloskvasir"
          target="_blank"
          rel="noopener"
        >
          <img src={logoGitHub} alt="GitHub logo" />
          GitHub
        </a>
        <a
          href="https://twitter.com/carloskvasir"
          target="_blank"
          rel="noopener"
        >
          <img src={logoTwitter} alt="Twitter logo" />
          Twitter
        </a>
        <a
          href="https://twitter.com/carloskvasir"
          target="_blank"
          rel="noopener"
        >
          <img src={logoLinkedin} alt="Twitter logo" />
          Twitter
        </a>
      </div>
    </section>
  )
}

export default About
