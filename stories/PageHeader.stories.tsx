import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { PageHeader } from "../src/components/PageHeader";
import {
  pageHeaderItems,
  pageHeaderLogoSrc,
  pageHeaderNotifications,
} from "./content";
import { getCases, getReadmeText, getStoryName } from "./utils";

const stories = storiesOf("PageHeader", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <PageHeader
      initialIsNavigationFlyoutOpen={false}
      initialIsNotificationsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      notifications={pageHeaderNotifications}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
      onNotificationsRead={action("onNotificationsRead")}
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
          "pageHeader.notifications",
          "pageHeader.locale",
          "pageHeader.noNotificationsText",
        ],
      }),
    },
  }
);

const cases = getCases({
  notifications: [[], pageHeaderNotifications],
  items: [pageHeaderItems],
  logoSrc: [pageHeaderLogoSrc],
  userName: ["", "Mihai-Gabriel David"],
  initialIsNavigationFlyoutOpen: [true, false],
  initialIsNotificationsFlyoutOpen: [true, false],
  initialIsPopoverOpen: [true, false],
  onMyAccount: [action("onMyAccount")],
  onSignOut: [action("onSignOut")],
  onSignIn: [action("onSignIn")],
  onTryFree: [action("onTryFree")],
  onApplication: [action("onApplication")],
  onLogo: [action("onLogo")],
  onNotificationsRead: [action("onNotificationsRead")],
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
