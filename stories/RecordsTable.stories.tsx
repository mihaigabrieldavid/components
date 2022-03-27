import { storiesOf } from "@storybook/react";
import { RecordsTable } from "../src/components/RecordsTable";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";
import {
  recordsTableColumns,
  recordsTableFilters,
  recordsTableItems,
  recordsTableSchema,
  recordsTableSelectedItems,
} from "./content";

const stories = storiesOf("RecordsTable", module);

stories.addDecorator(addReadme);

stories.add(
  `Example`,
  () => (
    <RecordsTable
      schema={undefined}
      items={recordsTableItems}
      columns={recordsTableColumns}
      selectedItems={[]}
      filters={recordsTableFilters}
      pageIndex={0}
      totalItemCount={100}
      searchQuery=""
      itemText="factură"
      itemsText="facturi"
      canDelete={false}
      isDeleting={false}
      onPageIndexChange={action("onPageIndexChange")}
      onSelectedItemsChange={action("onSelectedItemsChange")}
      onDelete={action("onDelete")}
      onSearchChange={action("onSearchChange")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": ["recordsTable.search", "recordsTable.delete"],
      }),
    },
  }
);

const cases = getCases({
  schema: [recordsTableSchema],
  items: [[], recordsTableItems],
  columns: [recordsTableColumns],
  selectedItems: [[], recordsTableSelectedItems],
  filters: [[], recordsTableFilters],
  pageIndex: [1],
  totalItemCount: [0, 100],
  searchQuery: ["", "factura 1"],
  itemText: ["factură"],
  itemsText: ["facturi"],
  canDelete: [true, false],
  isDeleting: [true, false],
  onPageIndexChange: [action("onPageIndexChange")],
  onSelectedItemsChange: [action("onSelectedItemsChange")],
  onDelete: [action("onDelete")],
  onSearchChange: [action("onSearchChange")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <RecordsTable {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
