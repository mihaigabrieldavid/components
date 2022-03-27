import { SignInForm } from "../src/components/SignInForm";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("SignInForm", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <SignInForm
      status="default"
      onForgotPassword={action("onForgotPassword")}
      onSubmit={action("onSubmit")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "signInForm.title",
          "signInForm.email",
          "signInForm.emailText",
          "signInForm.password",
          "signInForm.submit",
          "signInForm.forgotPassword",
          "signInForm.error",
        ],
      }),
    },
  }
);

const cases = getCases({
  status: ["submitting", "error", "default"],
  onForgotPassword: [action("onForgotPassword")],
  onSubmit: [action("onSubmit")],
});

cases.forEach((props: any) => {
  stories.add(`Case ${getStoryName(props)}`, () => <SignInForm {...props} />, {
    readme: {
      sidebar: getReadmeText({ Props: props }),
    },
  });
});
