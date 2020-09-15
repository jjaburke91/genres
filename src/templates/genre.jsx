/* global graphql */

import React from "react";
import { graphql } from "gatsby";

const Genre = props => {
    let genre;
    if (props.data.allGenresJson.edges.length) {
        genre = props.data.allGenresJson.edges[0].node;
    }

    if (!genre) return <div>Error finding genre {props.pageContext.genre_id}</div>;

    console.log(props.pageContext);
    return (
        <div>
            Hello genre page!
            {!!genre && (
                <div>
                    <h3>{genre.name}</h3>
                    <div>{genre.description}</div>
                </div>
            )}
        </div>
    );
};
export default Genre;

export const pageQuery = graphql`
  query GenreQuery ($genre_id: String!) {
      allGenresJson(
        filter: {
          fields: {
            genre_id: {eq: $genre_id}
          }
        }
      ) {
        edges {
          node {
            fields {
              genre_id
            }
            name
            description
          }
        }
      }
  }
`;
