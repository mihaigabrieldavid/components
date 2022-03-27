import { EmailSentModal } from "../src/components/EmailSentModal";
import { storiesOf } from "@storybook/react";
import { getReadmeText } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("EmailSentModal", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <EmailSentModal
      isVisible={true}
      email="john.doe@domain.com"
      onResend={action("onResend")}
      onClose={action("onClose")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "emailSentModal.title",
          "emailSentModal.body",
          "emailSentModal.text",
          "emailSentModal.resend",
          "emailSentModal.close",
        ],
      }),
    },
  }
);
