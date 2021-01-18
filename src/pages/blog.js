import React from 'react'
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <img
        src="/images/artist.jpg?imgeng=/f_webp/w_300/"
        alt="artist"
        style={{ width: "300px" }}
      />
      <img
        src="/images/breakfast.jpg"
        alt="breakfast"
        style={{ width: "300px" }}
      />
      <img
        src="/images/canyon.jpg?imgeng=/f_webp/w_300/"
        alt="canyon"
        style={{ width: "300px" }}
      />
      <img
        src="/images/hands.jpg?imgeng=/f_webp/w_300/"
        alt="hands"
        style={{ width: "300px" }}
      />
    </Layout>
  )
}

export default blog

