import { storiesOf } from "@storybook/react";
import { PermissionButtonModal } from "../src/components/PermissionButtonModal";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getCases, getReadmeText, getStoryName } from "./utils";

const stories = storiesOf("PermissionButtonModal", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <PermissionButtonModal
      isUpgradeRequired={false}
      onClose={action("onClose")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "permissionButtonModal.title",
          "permissionButtonModal.permissionMessage",
          "permissionButtonModal.upgradeMessage",
          "permissionButtonModal.close",
        ],
      }),
    },
  }
);

const cases = getCases({
  isUpgradeRequired: [false, true],
  onClose: [action("onClose")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <PermissionButtonModal {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
