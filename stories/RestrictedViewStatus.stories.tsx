import { RestrictedViewStatus } from "../src/components/RestrictedViewStatus";
import { storiesOf } from "@storybook/react";
import { getReadmeText } from "./utils";
import { addReadme } from "storybook-readme";

const stories = storiesOf("RestrictedViewStatus", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => <RestrictedViewStatus />, {
  readme: {
    sidebar: getReadmeText({
      "I18n tokens": [
        "restrictedViewStatus.title",
        "restrictedViewStatus.body",
      ],
    }),
  },
});
