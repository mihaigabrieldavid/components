import { storiesOf } from "@storybook/react";
import { DeleteButtonModal } from "../src/components/DeleteButtonModal";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getReadmeText } from "./utils";

const stories = storiesOf("DeleteButtonModal", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <DeleteButtonModal
      onCancel={action("onCancel")}
      onConfirm={action("onConfirm")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "deleteButtonModal.title",
          "deleteButtonModal.body",
          "deleteButtonModal.confirm",
          "deleteButtonModal.cancel",
        ],
      }),
    },
  }
);
