import { storiesOf } from "@storybook/react";
import { RecordsTable } from "../src/components/RecordsTable";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { getStoryName, getReadmeText, getCases } from "./utils";
import {
  recordsTableActions,
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
      selectedItems={recordsTableSelectedItems}
      filters={recordsTableFilters}
      pageIndex={0}
      totalItemCount={100}
      searchQuery=""
      canDelete={false}
      isDeleting={false}
      actions={recordsTableActions}
      initialIsPopoverOpen={false}
      onPageIndexChange={action("onPageIndexChange")}
      onSelectedItemsChange={action("onSelectedItemsChange")}
      onDelete={action("onDelete")}
      onSearchChange={action("onSearchChange")}
    />
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": [
          "recordsTable.search",
          "recordsTable.delete",
          "recordsTable.actions",
        ],
      }),
    },
  }
);

stories.add(`Example 2`, () => (
  <RecordsTable
    schema={undefined}
    items={recordsTableItems}
    columns={recordsTableColumns}
    selectedItems={recordsTableSelectedItems}
    filters={recordsTableFilters}
    pageIndex={0}
    totalItemCount={100}
    searchQuery=""
    canDelete={false}
    isDeleting={false}
    actions={[
      {
        id: "archive",
        name: "Arhivează",
        isLoading: false,
        onClick: action("onClick"),
      },
    ]}
    initialIsPopoverOpen={false}
    onPageIndexChange={action("onPageIndexChange")}
    onSelectedItemsChange={action("onSelectedItemsChange")}
    onDelete={action("onDelete")}
    onSearchChange={action("onSearchChange")}
  />
));

stories.add(`Example 3`, () => (
  <RecordsTable
    schema={undefined}
    items={recordsTableItems}
    columns={recordsTableColumns}
    selectedItems={recordsTableSelectedItems}
    filters={recordsTableFilters}
    pageIndex={0}
    totalItemCount={100}
    searchQuery=""
    canDelete={false}
    isDeleting={false}
    actions={[
      {
        id: "archive",
        name: "Arhivează",
        isLoading: true,
        onClick: action("onClick"),
      },
    ]}
    initialIsPopoverOpen={false}
    onPageIndexChange={action("onPageIndexChange")}
    onSelectedItemsChange={action("onSelectedItemsChange")}
    onDelete={action("onDelete")}
    onSearchChange={action("onSearchChange")}
  />
));

const cases = getCases({
  schema: [recordsTableSchema],
  items: [[], recordsTableItems],
  columns: [recordsTableColumns],
  selectedItems: [[], recordsTableSelectedItems],
  filters: [[], recordsTableFilters],
  actions: [
    [],
    [
      {
        id: "download",
        name: "Descarcă pdf",
        isLoading: true,
        onClick: action("onClick"),
      },
    ],
    recordsTableActions,
  ],
  pageIndex: [1],
  totalItemCount: [0, 100],
  searchQuery: ["", "factura 1"],
  canDelete: [true, false],
  isDeleting: [true, false],
  initialIsPopoverOpen: [true, false],
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
