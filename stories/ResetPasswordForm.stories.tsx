import { ResetPasswordForm } from "../src/components/ResetPasswordForm";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("ResetPasswordForm", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <ResetPasswordForm
      status="default"
      onBack={action("onBack")}
      onSubmit={action("onSubmit")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "resetPasswordForm.title",
          "resetPasswordForm.body",
          "resetPasswordForm.email",
          "resetPasswordForm.emailText",
          "resetPasswordForm.submit",
          "resetPasswordForm.back",
        ],
      }),
    },
  }
);

const cases = getCases({
  status: ["submitting", "default"],
  onBack: [action("onBack")],
  onSubmit: [action("onSubmit")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <ResetPasswordForm {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
