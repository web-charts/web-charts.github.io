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
            "/404",
            "/index.html",
            ...[
              "zh_CN", "en_US"
            ].map(lang => [
              `/${lang}/about`,
              `/${lang}/service`,
              `/${lang}/contacts`,
              `/${lang}/products/hoisters`,
              `/${lang}/products/rgv`,
              `/${lang}/products/agv`,
              `/${lang}/products/asrs`,
              `/${lang}/products/palletizing-robot`,
            ]).flat(Infinity)
          ]
        })
      );
    }

    return {
      plugins
    };
  }
};
