import React from 'react'
import Layout from '.src/components/layout/Layout'
import HeroSection from '.src/components/heroSection/HeroSection'
import BlogPostCard from '.src/components/blogPostCard/BlogPostCard'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
    </Layout>
  )
}

export default Home
