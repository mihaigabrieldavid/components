import { storiesOf } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { PageBodySideNav } from "../src/components/PageBodySideNav";
import { pageBodySideNavItems } from "./content";
import { getCases, getReadmeText, getStoryName } from "./utils";

const stories = storiesOf("PageBodySideNav", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => (
  <PageBodySideNav
    initialIsFlyoutOpen={false}
    items={pageBodySideNavItems}
    title="Meniu aplicație"
  />
));

const cases = getCases({
  items: [pageBodySideNavItems],
  title: ["Meniu aplicație"],
  initialIsFlyoutOpen: [true, false],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <PageBodySideNav {...props} />,
    {
      readme: {
        sidebar: getReadmeText({
          Props: props,
        }),
      },
    }
  );
});
