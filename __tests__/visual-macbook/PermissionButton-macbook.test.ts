import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import { beforeScreenshot, getMatchOptions } from "../../stories/utils";

initStoryshots({
  suite: "PermissionButton-macbook",
  storyKindRegex: /^PermissionButton$/,
  test: imageSnapshot({
    beforeScreenshot: beforeScreenshot("macbook"),
    getMatchOptions: getMatchOptions("macbook"),
  }),
});
