import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to the site! This is a project made for Eastern Kentucky University's CSC 496 Spring 2024 class.</p>
      <p>This site should display my growing knowledge of building sites with Gatsby. I've demonstrated that I can display text, so now let's pull a local image.</p>
      <p>Here's the project I'm currently working on outside of EKU, trying out painting my textures rather than using realistic ones for a more interesting effect. I enjoy 3D Modeling a lot!</p>
      <StaticImage
        alt="Ethereal looking checkered biome test scene in blender"
        src="../images/CurrentProject.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage