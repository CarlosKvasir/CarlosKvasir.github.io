import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
