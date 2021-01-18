import React from 'react'
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <h1>Products</h1>
      <img src="/images/artist.jpg" alt="artist" style={{ width: "200px" }} />
      <img
        src="/images/breakfast.jpg"
        alt="breakfast"
        style={{ width: "200px" }}
      />
      <img src="/images/canyon.jpg" alt="canyon" style={{ width: "200px" }} />
      <img src="/images/hands.jpg" alt="hands" style={{ width: "200px" }} />
    </Layout>
  )
}

export default blog

