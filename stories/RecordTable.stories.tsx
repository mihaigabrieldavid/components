import { storiesOf } from "@storybook/react";
import { RecordTable } from "../src/components/RecordTable";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";
import {
  recordTableColumns,
  recordTableItems,
  recordTableSelectedItems,
} from "./content";

const stories = storiesOf("RecordTable", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <RecordTable
      items={recordTableItems}
      columns={recordTableColumns}
      selectedItems={[]}
      noItemsText="Nu există produse/servicii de afișat"
      itemText="produs/serviciu"
      itemsText="produse/servicii"
      addButtonText="Adaugă produs/serviciu"
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
      onSelectedItemsChange={action("onSelectedItemsChange")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": ["recordTable.delete"],
      }),
    },
  }
);

const cases = getCases({
  items: [[], recordTableItems],
  columns: [recordTableColumns],
  selectedItems: [[], recordTableSelectedItems],
  noItemsText: ["Nu există produse/servicii de afișat"],
  itemText: ["produs/serviciu"],
  itemsText: ["produse/servicii"],
  addButtonText: ["Adaugă produs/serviciu"],
  onSelectedItemsChange: [action("onSelectedItemsChange")],
  onDelete: [action("onDelete")],
  onCreate: [action("onCreate")],
});

cases.forEach((props: any) => {
  stories.add(`Case ${getStoryName(props)}`, () => <RecordTable {...props} />, {
    readme: {
      sidebar: getReadmeText({ Props: props }),
    },
  });
});
