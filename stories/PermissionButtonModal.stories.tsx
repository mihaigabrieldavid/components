import { storiesOf } from "@storybook/react";
import { PermissionButtonModal } from "../src/components/PermissionButtonModal";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getReadmeText } from "./utils";

const stories = storiesOf("PermissionButtonModal", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => <PermissionButtonModal onClose={action("onClose")} />,
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "permissionButtonModal.title",
          "permissionButtonModal.body",
          "permissionButtonModal.close",
        ],
      }),
    },
  }
);
