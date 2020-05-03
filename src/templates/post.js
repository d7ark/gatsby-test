import React from "react"

const Post = ({ data, location }) => {
  if (data.wordpressPost == null) {
    return null
  }
  return (
    <>
      <div>{data.wordpressPost.title}</div>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
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
