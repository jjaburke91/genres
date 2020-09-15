import React from "react"
import GenreItem from "./GenreItem"

const GenreList = ({ genres }) => {
  return genres.map( (genre, i) => (
    <GenreItem genre={genre} key={`genre-${i}`} />
  ));
}

export default GenreList;
