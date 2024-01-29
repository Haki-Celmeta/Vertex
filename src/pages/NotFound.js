import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center text-2xl gap-4 mt-10">
      <h1>Oh no, this page does not exist!</h1>
      <Link to="/" className="text-blue-600 underline decoration-1">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  )
}

export default NotFound;