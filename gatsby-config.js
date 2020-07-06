if (process.env.NODE_ENV === "development") {
  require("dotenv").config()
}

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "8maj9my06hym",
        accessToken: "EyP8b_-BDUTvvp3J-TtvbRbmmDPVoDrYJ-_d39cSQjY",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-antd",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
      },
    },
  ],
}
