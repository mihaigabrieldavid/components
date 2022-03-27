import { UpdatePasswordForm } from "../src/components/UpdatePasswordForm";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("UpdatePasswordForm", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => <UpdatePasswordForm status="default" onSubmit={action("onSubmit")} />,
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "updatePasswordForm.title",
          "updatePasswordForm.password",
          "updatePasswordForm.passwordText",
          "updatePasswordForm.submit",
          "updatePasswordForm.error",
        ],
      }),
    },
  }
);

const cases = getCases({
  status: ["submitting", "error", "default"],
  onSubmit: [action("onSubmit")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <UpdatePasswordForm {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
