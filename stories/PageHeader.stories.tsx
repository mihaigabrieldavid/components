import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { PageHeader } from "../src/components/PageHeader";
import { pageHeaderItems, pageHeaderLogoSrc } from "./content";
import { getCases, getReadmeText, getStoryName } from "./utils";

const stories = storiesOf("PageHeader", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "pageHeader.myAccount",
          "pageHeader.signOut",
          "pageHeader.signIn",
          "pageHeader.tryFree",
          "pageHeader.application",
        ],
      }),
    },
  }
);

const cases = getCases({
  items: [pageHeaderItems],
  logoSrc: [pageHeaderLogoSrc],
  userName: ["", "Mihai-Gabriel David"],
  initialIsFlyoutOpen: [true, false],
  initialIsPopoverOpen: [true, false],
  onMyAccount: [action("onMyAccount")],
  onSignOut: [action("onSignOut")],
  onSignIn: [action("onSignIn")],
  onTryFree: [action("onTryFree")],
  onApplication: [action("onApplication")],
  onLogo: [action("onLogo")],
});

cases.forEach((props: any) => {
  stories.add(`Case ${getStoryName(props)}`, () => <PageHeader {...props} />, {
    readme: {
      sidebar: getReadmeText({
        Props: props,
      }),
    },
  });
});
