# koa-uba-dev-middleware



## Install

```bash
$ npm install koa-uba-dev-middleware -S
```


## How to use?

```js
const Koa = require("koa");
const app = new Koa();
const webpack = require("webpack");
const devMiddleware = require("koa-uba-dev-middleware");
const webpackConfig = require("./webpack.dev.config");

const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler, {
  stats: {
    colors: true
  }
}));

app.listen(5000, () => {
  console.log("webpack server done.");
});

```

## API

[webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware)