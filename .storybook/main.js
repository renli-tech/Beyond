const ArcGISPlugin = require('@arcgis/webpack-plugin');

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    // Add your plugin
    config.plugins.push(
        new ArcGISPlugin(),
    );
    
    // Since this package has used some node's API so you might have to stop using it as client side
    config.node = {
        ...config.node,
        process: false,
        fs: "empty"
    };

    return config;
}
}