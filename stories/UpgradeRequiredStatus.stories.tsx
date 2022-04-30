import { UpgradeRequiredStatus } from "../src/components/UpgradeRequiredStatus";
import { storiesOf } from "@storybook/react";
import { getReadmeText } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("UpgradeRequiredStatus", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => <UpgradeRequiredStatus onClick={action("onClick")} />,
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "upgradeRequiredStatus.title",
          "upgradeRequiredStatus.button",
        ],
      }),
    },
  }
);
