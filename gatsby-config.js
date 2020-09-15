/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Genres`,
        siteUrl: `http://www.genres.com`,
        description: ``
    },

    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `genres`,
                path: `${__dirname}/data/`,
                plugins: [
                    `gatsby-transformer-json`
                ]
            }
        }
    ]
};
