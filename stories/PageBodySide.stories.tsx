import { storiesOf } from "@storybook/react";
import { PageBodySideNav } from "../src/components/PageBodySideNav";
import { PageBodySide } from "../src/components/PageBodySide";
import { PageBodySideHeader } from "../src/components/PageBodySideHeader";
import { pageBodySideNavItems } from "./content";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("PageBodySide", module);

stories.add(`Example`, () => (
  <PageBodySide>
    <PageBodySideHeader
      item={{ id: "1", name: "Spațiu de lucru" }}
      initialIsPopoverOpen={false}
      items={[
        { id: "1", name: "Spațiu de lucru" },
        { id: "2", name: "Spațiu de lucru 2" },
        { id: "3", name: "Spațiu de lucru 3" },
      ]}
      noItemsMessage=""
      onClick={action("onClick")}
    />
    <PageBodySideNav
      initialIsFlyoutOpen={false}
      items={pageBodySideNavItems}
      title=""
      selectedItemId=""
    />
  </PageBodySide>
));

stories.add(`Example 2`, () => (
  <PageBodySide>
    <PageBodySideHeader
      item={{ id: "1", name: "Singurul spațiu de lucru" }}
      initialIsPopoverOpen={false}
      items={[]}
      noItemsMessage="Creează un nou spațiu de lucru și o să apară aici în meniu"
      onClick={action("onClick")}
    />
    <PageBodySideNav
      initialIsFlyoutOpen={false}
      items={pageBodySideNavItems}
      title=""
      selectedItemId=""
    />
  </PageBodySide>
));

stories.add(`Example 3`, () => (
  <PageBodySide>
    <PageBodySideNav
      initialIsFlyoutOpen={false}
      items={pageBodySideNavItems}
      title="Meniu aplicație"
      selectedItemId=""
    />
  </PageBodySide>
));
