import { storiesOf } from "@storybook/react";
import { PermissionButton } from "../src/components/PermissionButton";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";

const stories = storiesOf("PermissionButton", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => (
  <PermissionButton
    initialIsModalVisible={false}
    isLoading={false}
    hasPermission={false}
    isUpgradeRequired={false}
    color="primary"
    onClick={action("onClick")}
  >
    Button
  </PermissionButton>
));

const cases = getCases({
  color: ["danger", undefined],
  hasPermission: [false, true],
  isUpgradeRequired: [false, true],
  initialIsModalVisible: [true, false],
  isLoading: [false, true],
  onClick: [action("onClick")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <PermissionButton {...props}>Button</PermissionButton>,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
