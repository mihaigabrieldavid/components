import { InvitationToCollaborate } from "../src/components/InvitationToCollaborate";
import { storiesOf } from "@storybook/react";
import { getCases, getReadmeText, getStoryName } from "./utils";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("InvitationToCollaborate", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <InvitationToCollaborate
      userName="Popescu Cristian"
      subtitle="Nume workspace"
      message="Te-a invitat să colaborezi cu el"
      email="john.doe@domain.com"
      body="Dorești să accepți invitația și să devii un colaborator?"
      status="signUp"
      onAccept={action("onAccept")}
      onDecline={action("onDecline")}
      onSignUp={action("onSignUp")}
      onAgreement={action("onAgreement")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "invitationToCollaborate.accept",
          "invitationToCollaborate.decline",
          "invitationToCollaborate.error",
        ],
      }),
    },
  }
);

const cases = getCases({
  body: ["Dorești să accepți invitația și să devii un colaborator?"],
  userName: ["Popescu Cristian"],
  subtitle: ["nume workspace"],
  message: ["Te-a invitat să colaborezi cu el"],
  email: ["john.doe@domain.com"],
  status: [
    "loading",
    "signUp",
    "signingUp",
    "signUpError",
    "accept",
    "accepting",
  ],
  onAccept: [action("onAccept")],
  onDecline: [action("onDecline")],
  onSignUp: [action("onSignUp")],
  onAgreement: [action("onAgreement")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <InvitationToCollaborate {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
