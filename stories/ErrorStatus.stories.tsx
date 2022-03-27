import { ErrorStatus } from "../src/components/ErrorStatus";
import { storiesOf } from "@storybook/react";
import { getReadmeText } from "./utils";
import { addReadme } from "storybook-readme";

const stories = storiesOf("ErrorStatus", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => <ErrorStatus />, {
  readme: {
    sidebar: getReadmeText({
      "I18n tokens": ["errorStatus.title", "errorStatus.body"],
    }),
  },
});
