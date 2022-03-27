import { SignUpForm } from "../src/components/SignUpForm";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("SignUpForm", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <SignUpForm
      status="default"
      userEmail=""
      onAgreement={action("onAgreement")}
      onSubmit={action("onSubmit")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "signUpForm.title",
          "signUpForm.name",
          "signUpForm.email",
          "signUpForm.emailText",
          "signUpForm.password",
          "signUpForm.passwordText",
          "signUpForm.phone",
          "signUpForm.phoneText",
          "signUpForm.submit",
          "signUpForm.error",
          "signUpForm.agreement",
          "signUpForm.agreementText",
        ],
      }),
    },
  }
);

const cases = getCases({
  status: ["submitting", "error", "default"],
  userEmail: ["", "john.doe@domain.com"],
  onAgreement: [action("onAgreement")],
  onSubmit: [action("onSubmit")],
});

cases.forEach((props: any) => {
  stories.add(`Case ${getStoryName(props)}`, () => <SignUpForm {...props} />, {
    readme: {
      sidebar: getReadmeText({ Props: props }),
    },
  });
});
