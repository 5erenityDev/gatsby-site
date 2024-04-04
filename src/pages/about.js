import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm Sean Blankenship, but can be found online as <a href="https://twitter.com/Serenity_Dev">@Serenity_Dev</a>. My publicised works are currently limited, but that's something I hope to change after this semester!</p>
      <p>The home page showed my ability to pull a local image, so let's try pulling an image from the internet. Here is my twitter profile picture, It's of a character I designed a long time ago, definitely something I'd like to update soon!</p>
      <StaticImage
        alt="@Serenity_Dev's twitter profile picture. Currently an image of a character from one of my games."
        src="https://pbs.twimg.com/profile_images/1657303276872671234/J-lX5sry_400x400.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage