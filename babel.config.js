module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  env: {
    development: {
      sourceMap: true,
      retainLines: true
    }
  },
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
