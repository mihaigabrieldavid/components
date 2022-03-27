module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["storybook-i18n", "storybook-readme", "@storybook/addon-actions"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    reactDocgen: false,
  },
};
