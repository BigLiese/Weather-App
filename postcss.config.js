module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 10,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
    }),
  ],
};
