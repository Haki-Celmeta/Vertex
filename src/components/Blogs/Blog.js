import React from "react";
import arrow from "../../assets/images/line-right-arrow.svg";

const Blog = ({ children, image, title, date, url }) => {
  return (
    <div className="blog">
      <img src={image} alt="blog" />
      <div className="px-4 flex flex-col gap-2">
        <time dateTime="2024-01-02">{date}</time>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
        <a href={url} target="_blank" rel="blog noreferrer">
          Read More
          <img src={arrow} alt="line-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default Blog;