import React from "react"
import { Link } from "gatsby"

const GenreItem = ({ genre }) => {
  return (
    <div>
      <span><Link to={`/genre/${genre.fields.genre_id}`}>{genre.name}</Link></span>
    </div>
  )
};

export default GenreItem;
