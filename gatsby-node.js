const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "GenresJson") {
        const id = node.name.toLowerCase().replace(" ", "-");
        const slug = `/genre/${id}`;

        createNodeField({
            node,
            name: "slug",
            value: slug
        });
        createNodeField({
            node,
            name: "genre_id",
            value: id
        });

    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
          allGenresJson {
            edges {
              node {
                fields {
                  slug
                  genre_id
                }
              }
            }
          } 
        }
    `);

    result.data.allGenresJson.edges.forEach( ({node}) => {
        console.log(`creating page at ${node.fields.slug}`);

        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/genre.jsx'),
            context: {
                genre_id: node.fields.genre_id,
            }
        })
    })
};
