import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import { beforeScreenshot, getMatchOptions } from "../../stories/utils";

initStoryshots({
  suite: "Page-macbook",
  storyKindRegex: /^Page$/,
  test: imageSnapshot({
    beforeScreenshot: beforeScreenshot("macbook"),
    getMatchOptions: getMatchOptions("macbook"),
  }),
});
