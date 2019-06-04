import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import Styles from './index.module.css'

import Layout from "../components/Layout"
import Image from "../components/Image"
import Seo from "../components/Seo"
import Surface from '../components/Surface'
import LinkButton from '../components/LinkButton'
import Calendar from '../components/Calendar'
import Map from '../components/Map'

//#region HERO SECTION

type HeroProps = {
  image: GatsbyImageProps
}

const Hero = (props: HeroProps) => {
  return (
    <section className={Styles.heroSection}>
      <Img className={Styles.heroImage} {...props.image} />
      <h1 className={Styles.heroHubName}>Sunrise Anytown</h1>
      <p className={Styles.heroHubDescription}>Repellendus veniam corrupti eius, corporis impedit quae itaque, nulla excepturi saepe accusamus deleniti minima dolor eligendi nihil nisi voluptatem, illum dignissimos distinctio!</p>
    </section>
  )
}

//#endregion

//#region ABOUT SECTION

const About = () => (
  <section className={Styles.aboutSection} id="about">
    <div className={Styles.aboutContainer}>
      <h2 className={Styles.aboutHeading}>
        About Sunrise Anytown
      </h2>
      <Surface radius={4} elevation="2dp">
        <p className={Styles.aboutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel labore accusamus, sit iure eveniet rerum eum dignissimos provident! Provident facere soluta adipisci quas, autem fuga eum quos ipsa officiis.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel labore accusamus, sit iure eveniet rerum eum dignissimos provident! Provident facere soluta adipisci quas, autem fuga eum quos ipsa officiis.
        </p>
      </Surface>
    </div>
  </section>
)

//#endregion

//#region BLOG SECTION

type BlogProps = {
  image: GatsbyImageProps
}

const BlogLatestPost = (props: BlogProps) => (
  <div className={Styles.blogLatestPostCard}>
    <Surface elevation="2dp" radius={4}>
      <article className={Styles.blogLatestPostArticle}>
        <Img className={Styles.blogLatestPostImage} {...props.image} />
        <h3 className={Styles.blogLatestPostTitle}>Featured Blog Post</h3>
        <p className={Styles.blogLatestPostPreview}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id quas quod ipsum at maiores minima a, qui veritatis tenetur provident reprehenderit quam expedita officiis fuga similique nemo, eligendi assumenda...</p>
        <div className={Styles.blogLatestPostLink}>
          <LinkButton to="/page-2/" label="Read Post" />
        </div>
      </article>
    </Surface>
  </div>
)

const BlogSeeAll = () => (
  <div className={Styles.blogSeeAll}>
    <Surface elevation="2dp" radius={4} height="100%">
      <div className={Styles.blogSeeAllContainer}>
        See all blog posts
      </div>
    </Surface>
  </div>
)

const Blog = (props: BlogProps) => {
  return (
    <section className={Styles.blogSection} id="news">
      <div className={Styles.blogCardsContainer}>
        <h2 className={Styles.blogHeading}>Latest News</h2>
        <BlogLatestPost {...props} />
        <BlogSeeAll />
      </div>
    </section>
  )
}

//#endregion

//#region EVENTS SECTION

const Events = () => (
  <section className={Styles.eventsSection} id="events">
    <div className={Styles.eventsContainer}>
      <h2 className={Styles.eventsHeading}>Events</h2>
      <div className={Styles.eventsCalendar}>
        <Calendar />
      </div>
      <div className={Styles.eventsDetail}>
        <Surface elevation="4dp" radius={4} height="100%">
          <div className={Styles.eventsDetailLayout}>
            <div className={Styles.eventsDetailMap}>
              <Map location="Johnie's Coffee Shop,  Los Angeles" />
            </div>
            <div className={Styles.eventsDetailContent}>
              <div className={Styles.eventsDetailName}>
                June Hub Meeting
              </div>
              <div className={Styles.eventsDetailLocation}>
                Johnie's Coffee Shop,  Los Angeles
              </div>
              <div className={Styles.eventsDetailTime}>
                6:00PM - 8:00PM
              </div>
              <div className={Styles.eventDetailsDescription}>
                <p>Sunrise Movement is a youth led organization aiming to stop climate change and create millions of good jobs in the process.</p>
                <p>Every couple of weeks we experience yet another climate disaster. All the while, our politicians refuse to step up and join us in this fight head on.</p>
                <p>Come join us at our sixth hub meeting where we will prepare to #ChangeTheDebate.</p>
              </div>
            </div>
          </div>
        </Surface>
      </div>
    </div>
  </section>
)

//#endregion

const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hub-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blogLatestPostImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  return (
    <Layout>
      <Seo title="Home" />
      <Hero image={data.heroImage.childImageSharp} />
      <About />
      <Blog image={data.blogLatestPostImage.childImageSharp} />
      <Events />
    </Layout>
  )
}

export default IndexPage
