import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/blog.scss"

export default function Template(data) {
  const pageData = data.pageContext.node

  return (
    <Layout cssClass="card">
      <SEO
        title={pageData.frontmatter.title}
        description={pageData.frontmatter.description}
      ></SEO>
      <Link to="/">&lt; Back</Link>
      <h2> {pageData.frontmatter.title} </h2>
      <div>{new Date(pageData.frontmatter.date).toDateString()}</div>
      <span>Word Count: {pageData.wordCount.words}</span>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: pageData.html }}
      ></div>
    </Layout>
  )
}
