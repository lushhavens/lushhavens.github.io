import * as React from "react"
import Layout from "../components/layout"
import HeroBlock from "../components/blocks/hero.block"
import UnderCOnstructionBLock from "../components/blocks/underConstructionBlock"
import HowItWorksBlock from "../components/blocks/howItWorks.block"
import VenueListingBlock from "../components/blocks/venueListing.block"
import EventCategoriesBlock from "../components/blocks/eventCategories.block"
import WhyChooseBlock from "../components/blocks/whyChooseUs.block"

//landing page
const IndexPage = () => {
  return (
    <Layout>
      {/* hero block */}
      <HeroBlock />
      {/* how it works block */}
      {/* <HowItWorksBlock /> */}
      {/* venue listing block */}
      <VenueListingBlock />
      {/* event categories block */}
      <EventCategoriesBlock />
      {/* why choose us block */}
      <WhyChooseBlock />
    </Layout>
    // <UnderCOnstructionBLock />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
