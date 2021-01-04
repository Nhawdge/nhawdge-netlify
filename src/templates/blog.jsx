import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout cssClass="card">
      <SEO title={frontmatter.title}></SEO>
      <h2> {frontmatter.title} </h2>
      {frontmatter.date}
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath {
    markdownRemark{
      html
       frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
