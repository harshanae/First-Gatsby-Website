import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby' 
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>
          {
            data.allFile.nodes.map(node => (
            <li key={node.name}>
                {node.name}
            </li>
            ))
        }
      </p>
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`