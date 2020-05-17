// build と jest で共通化するため、このファイルに外出しして定義している
module.exports = {
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
}
