/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  configureWebpack: () => {
    const plugins = [];

    if (process.env.NODE_ENV === "production") {
      plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, "./dist"),
          routes: [
            "/",
            "/index.html",
            "/about",
            "/service",
            "/contacts",
            "/products/hoisters",
            "/products/rgv",
            "/products/agv",
            "/products/asrs",
            "/products/palletizing-robot",
            "/404",
          ]
        })
      );
    }

    return {
      plugins
    };
  }
};
