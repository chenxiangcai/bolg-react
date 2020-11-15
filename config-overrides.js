const {
    override,
    addWebpackAlias,
    addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");
module.exports = override(
    addWebpackAlias({
        assets: path.resolve(__dirname, "./src/assets"),
        "@": path.resolve(__dirname, "./src/components"),
    }),
    // 装饰器
    addDecoratorsLegacy()
);
