import * as React from "react"
import { Link } from "gatsby"
import Layout from '../Layouts/index';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h3>Page not found.</h3>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <Link to="/">Go Back</Link>
    </Layout>
  )
}

export default NotFoundPage
