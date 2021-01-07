import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              type
            }
          }
        }
      }
    }
  `)
  const blogs = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Nhawdge.net</h1>
      <p>
        Hi and welcome to my personal, professional, and everything else blog. I'm keeping it simple, and blogging about things I'm interested in, and things I've done.
      </p>
      <ul>
        {blogs.map(x => (
          <li>
            <Link
              to={`/blog/${x.node.frontmatter.title
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              {x.node.frontmatter.title}
            </Link>
            <span className={"tag " + x.node.frontmatter.type.toLowerCase()}>
              {x.node.frontmatter.type}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
