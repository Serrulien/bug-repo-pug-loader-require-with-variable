const fs = require("fs");
const path = require("path");
const { runLoaders } = require("loader-runner");



runLoaders(
  {
    resource: "./src/homepage.pug",
    loaders: [require.resolve('pug-loader')],
    readResource: fs.readFile.bind(fs),
  },
  (err, result) => (err ? console.error(err) : console.log(result))
);
