import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Introduction",
    url: "https://watchfulloppenheimer2023moviea.gatsbyjs.io",
    description:
      "Watch Full Movie Oppenheimer 2023: Step into the world of brilliance and intrigue as we delve into the mesmerizing journey of J. Robert Oppenheimer, the father of the atomic bomb. In this SEO-optimized article, we explore the cinematic masterpiece that captivated audiences worldwide and left an indelible mark on the film industry. From the visionary direction to the stellar performances, and from historical accuracy to artistic brilliance, Oppenheimer 2023 stands tall as a testament to the power of storytelling. So, let's take a deep dive into the heart of this compelling movie.",
  },
  {
    text: "Oppenheimer 2023: A Cinematic Marvel",
    url: "https://watchfulloppenheimer2023moviea.gatsbyjs.io",
    description:
      "The Vision of the Director: Oppenheimer 2023 was brought to life by the creative genius of acclaimed director Christopher Nolan. Known for his thought-provoking narratives and mind-bending concepts, Nolan's take on J. Robert Oppenheimer's life was both enlightening and gripping. The director's commitment to historical authenticity and attention to detail set the stage for a truly immersive cinematic experience. Star-Studded Cast: The film's cast reads like a who's who of Hollywood's finest. Christian Bale's portrayal of J. Robert Oppenheimer was nothing short of transformative, earning him praise from critics and audiences alike. Alongside him, Cate Blanchett, as the enigmatic physicist Lisa Meitner, delivered a captivating performance that added depth to the narrative. The chemistry among the ensemble cast elevated the movie to new heights. Filming Locations and Cinematography: Oppenheimer 2023 took viewers on a visual odyssey, thanks to the breathtaking cinematography by Hoyte Van Hoytema. The movie was shot in a variety of locations, from historical laboratories to picturesque landscapes, each adding layers of authenticity to the narrative. The result was a visually stunning journey that held audiences spellbound.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Oppenheimer 2023",
    url: "https://aius.site/movie/872585/oppenheimer.html",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Watch Full <b>Oppenheimer 2023 Movie</b> - A Masterpiece of Historical Drama
      </h1>
      <p className={styles.intro}>
        <b>Visit Link To Watch Full Movie:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
