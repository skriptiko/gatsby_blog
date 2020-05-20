import React from "react"

const Article = ({ content }) => {
  console.log("content", content)

  const {
    title,
    text,
    banner,
    publishedAt,
  } = content
  const url = banner?.file?.url;
  const description = text?.text;


  return (
    <div>
      <h2>{title}</h2>
      {url && <img src={url} alt={title} />}
      {description && <p>{description}</p>}
      <h5>{publishedAt}</h5>
    </div>
  )
}

export default Article
