require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const autoprefixer = require('autoprefixer');
// const theme = require('./src/theme');
// const utils = require('./src/utils');

module.exports = {
    siteMetadata: {
        siteUrl : 'https://www.parisetailleurs.fr',
        name: 'Paris et ailleurs ',
        title: 'Paris et ailleurs - Chasseuses immobilier',
        description: 'Paris et ailleurs est une agence de chasseur immobilier spécialisée dans la recherche d’appartements et de maisons à Paris et ses alentours. Nous accompagnons les acheteurs dans leur projet immobilier d’achat de résidence principale ou secondaire.',
        language: 'fr-FR',
        // googleAnalyticsId: 'UA-37418721-1',
        facebookPageUrl: 'https://www.facebook.com/parisetailleurschasseusesimmobilier/',
        instagramPageUrl: 'https://www.instagram.com/parisetailleurs.fr',
        linkedinPageUrl: 'https://www.linkedin.com/company/paris-et-ailleurs/',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-source-instagram`,
            options: {
                username: `6695486890`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
              // You can find your read-only API token under the Settings > API tokens
              // section of your administrative area:
              apiToken: `0767401bd3da8844ffaabd71d5739a`,
        
              // The project environment to read from. Defaults to the primary environment:
              environment: `main`,
        
              // If you are working on development/staging environment, you might want to
              // preview the latest version of records instead of the published one:
              previewMode: false,
        
              // Disable automatic reloading of content when some change occurs on DatoCMS:
              disableLiveReload: false,
        
            },
          },
        // {
        //   resolve: "gatsby-source-graphql",
        //   options: {
        //       typeName: "DatoCMS",
        //       fieldName: "datocms",
        //       url: "https://graphql.datocms.com/",
        //       // HTTP headers
        //       headers: {
        //           // Learn about environment variables: https://gatsby.dev/env-vars
        //           Authorization: `Bearer ${process.env.DATO_API_KEY}`,
        //       },
        //   },
        // },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId : "UA-178693743-1",
                anonymize  : true,
                respectDNT : true
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    autoprefixer({
                        grid: true
                    })
                ],
            }
        },
        {
            resolve: 'gatsby-plugin-sitemap'
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                env: {
                    development: {
                        policy: [{userAgent: '*', disallow: ['/']}]
                    },
                    preprod: {
                        policy: [{userAgent: '*', disallow: ['/']}]
                    },
                    production: {
                        policy: [{userAgent: '*', allow: '/'}]
                    }
                }
            }
        }
    ],
}
