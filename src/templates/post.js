import React from "react"

const Post = ({ data, location }) => {
  console.log("data", data)
  return (
    <>
      <div>{data.wordpressPost.title}</div>
      <div dangerouslySetInnerHTML={{__html: data.wordpressPost.content}} />
    </>
  )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
