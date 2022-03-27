import { AccountSecurityVerification } from "../src/components/AccountSecurityVerification";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";

const stories = storiesOf("AccountSecurityVerification", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => <AccountSecurityVerification status="success" />, {
  readme: {
    sidebar: getReadmeText({
      "I18n tokens": [
        "accountSecurityVerification.successTitle",
        "accountSecurityVerification.errorTitle",
        "accountSecurityVerification.successBody",
        "accountSecurityVerification.errorBody",
      ],
    }),
  },
});

const cases = getCases({
  status: ["loading", "success", "error"],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <AccountSecurityVerification {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
