import { storiesOf } from "@storybook/react";
import { DeleteButton } from "../src/components/DeleteButton";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";

const stories = storiesOf("DeleteButton", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => (
  <DeleteButton
    initialIsModalVisible={false}
    isLoading={false}
    hasPermission={true}
    onClick={action("onClick")}
  >
    Button
  </DeleteButton>
));

const cases = getCases({
  isLoading: [false, true],
  hasPermission: [false, true],
  initialIsModalVisible: [false, true],
  onClick: [action("onClick")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <DeleteButton {...props}>Button</DeleteButton>,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
