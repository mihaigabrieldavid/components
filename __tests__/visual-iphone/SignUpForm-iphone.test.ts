import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import { beforeScreenshot, getMatchOptions } from "../../stories/utils";

initStoryshots({
  suite: "SignUpForm-iphone",
  storyKindRegex: /^SignUpForm$/,
  test: imageSnapshot({
    beforeScreenshot: beforeScreenshot("iphone"),
    getMatchOptions: getMatchOptions("iphone"),
  }),
});
