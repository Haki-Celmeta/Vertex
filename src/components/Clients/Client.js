import React from "react";

const Client = ({ author, children }) => {
  return (
    <blockquote>
      <p>{children}</p>
      <footer>- {author}</footer>
    </blockquote>
  )
}

export default Client;