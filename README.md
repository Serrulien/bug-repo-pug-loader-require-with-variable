**mini repo for using require function with a variable inside pug templates**

```bash
npm i
npm run build:dev
```

by default it will build the project with an error but you can change that in the pug template located in src/homepage.pug (just comment/uncomment lines).

You can run `pug-loader` as standalone with `node run-loader.js`. Look at https://survivejs.com/webpack/extending/loaders/#debugging-loaders-with-loader-runner-

The ouput of run-loader is in logs/ directory. One file (`static.log`) for require('path/image') and the other (`with-variable`) for require(var).
