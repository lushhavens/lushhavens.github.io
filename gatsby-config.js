/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lushHavens`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337', // or your Strapi Cloud URL
        accessToken:
          '01dfcaf4780e4f5e3e30b25984f6515e368d6b24156e71f18b7863fb36ded788ec10cb23d631af82645b025c64f415fc1225b1e5925979d6c4795c63d15d9c30945913304fabf0505b75a31ea08a4099460b19416b39be63814b6c557ca919748fc1fd6beb4fa34523382cb2f3f5e76dcb8c8428cdcd6d6ad008726131f27719', // optional, if you have a public or private token
        collectionTypes: ['venue'], // your content type(s)
        queryLimit: 1000,
      },
    },
  ],
};