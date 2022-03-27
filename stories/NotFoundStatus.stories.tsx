import { NotFoundStatus } from "../src/components/NotFoundStatus";
import { storiesOf } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { getReadmeText } from "./utils";

const stories = storiesOf("NotFoundStatus", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => <NotFoundStatus />, {
  readme: {
    sidebar: getReadmeText({
      "I18n tokens": ["notFoundStatus.title", "notFoundStatus.body"],
    }),
  },
});
