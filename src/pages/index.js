import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
     <Layout pageTitle="Home Page">
      <p>This is my first gatsby website</p>
      <StaticImage
       alt="Football is the most popular game on earth"
        src="../images/football.jpg"
      ></StaticImage>
    </Layout>
  )
}

export default IndexPage;