import { storiesOf } from "@storybook/react";
import { Records } from "../src/components/Records";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";
import { recordsActions, recordsBreadcrumbs, recordsTable } from "./content";

const stories = storiesOf("Records", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <Records
      breadcrumbs={recordsBreadcrumbs}
      noItemsText="Nu există facturi de afișat"
      firstItemText="prima factură"
      itemText="factură"
      itemsText="facturi"
      canCreate={false}
      status="loaded"
      actions={recordsActions}
      initialIsPopoverOpen={false}
      onCreate={action("onCreate")}
      onUpgrade={action("onUpgrade")}
    >
      {recordsTable}
    </Records>
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "records.create",
          "records.startCreating",
          "records.now",
        ],
      }),
    },
  }
);

stories.add(`Example 2`, () => (
  <Records
    breadcrumbs={recordsBreadcrumbs}
    noItemsText="Nu există facturi de afișat"
    firstItemText="prima factură"
    itemText="factură"
    itemsText="facturi"
    canCreate={false}
    status="empty"
    actions={[]}
    initialIsPopoverOpen={false}
    onCreate={action("onCreate")}
    onUpgrade={action("onUpgrade")}
  >
    records table
  </Records>
));

const cases = getCases({
  breadcrumbs: [recordsBreadcrumbs],
  actions: [[], recordsActions],
  noItemsText: ["Nu există facturi de afișat"],
  firstItemText: ["prima factură"],
  itemText: ["factură"],
  itemsText: ["facturi"],
  canCreate: [true, false],
  status: [
    "loading",
    "error",
    "restrictedView",
    "empty",
    "loaded",
    "upgradeRequired",
  ],
  initialIsPopoverOpen: [true, false],
  onCreate: [action("onCreate")],
  onUpgrade: [action("onUpgrade")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <Records {...props}>{recordsTable}</Records>,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
