const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

const externals = {
  vue: "Vue",
  vuex: "Vuex",
  "vue-lazyload": "VueLazyload",
  "vue-router": "VueRouter",
  vant: "vant",
  axios: "axios"
};

// * 资源配置
const cdns = {
  dev: {},
  build: {
    css: [],
    js: []
  }
};

const ossCDN = "/";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? ossCDN : "/",
  assetsDir:
    process.env.NODE_ENV === "production"
      ? "static" + new Date().toLocaleDateString().replace(/\//g, "-")
      : "static",

  lintOnSave: false,
  productionSourceMap: true,
  devServer: {
    // * 接口跨域处理
    proxy: {
      "/api": {
        target: "http://114.55.43.33:8888/",
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 单位适配 之后要改vw 直接用插件postcss-px-to-viewport替换pxtorem即可
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  // * 打包忽略项
  configureWebpack: {
    devtool: "source-map",
    externals: process.env.NODE_ENV === "production" ? externals : {}
  },
  chainWebpack: config => {
    // * 移除prefetch和preload
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    if (process.env.NODE_ENV === "production") {
      config.entry("index").add("babel-polyfill");
      config.plugin("html").tap(args => {
        // 加上属性引号
        args[0].minify.removeAttributeQuotes = false;
        args[0].cdn = cdns.build;
        args[0].isProd = true;
        return args;
      });
    }
  }
};
