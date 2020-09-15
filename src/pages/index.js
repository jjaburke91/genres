/* global graphql */

import React from "react";
import { graphql } from "gatsby";

import GenreList from "../Components/GenreList";

function parseEdgesToGenres(edges) {
    return edges.map(edge => edge.node);
}

const Home = props => {
    const genres = parseEdgesToGenres(props.data.allGenresJson.edges);

    return (
        <div>
            Hello world!

            <GenreList genres={genres}/>
        </div>
    );
};
export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    allGenresJson {
      edges {
        node {
          fields {
            slug
            genre_id
          }
          name
        }
      }
    }
  }
`;
