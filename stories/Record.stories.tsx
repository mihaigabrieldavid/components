import { storiesOf } from "@storybook/react";
import { Record } from "../src/components/Record";
import { addReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import {
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiLink,
  EuiSpacer,
} from "@elastic/eui";
import { getStoryName, getReadmeText, getCases } from "./utils";
import { RecordTable } from "../src/components/RecordTable";
import {
  recordActions,
  recordBreadcrumbs,
  recordTableColumns,
  recordTableItems,
} from "./content";

const stories = storiesOf("Record", module);

stories.addDecorator(addReadme);

const children = (
  <>
    <EuiForm component="form">
      <EuiFormRow label="Factură">
        <EuiFieldText name="invoice" />
      </EuiFormRow>
      <EuiFormRow label="Client" labelAppend={<EuiLink>Pagină client</EuiLink>}>
        <EuiFieldText name="client" />
      </EuiFormRow>
      <EuiFormRow label="Data emiterii">
        <EuiFieldText name="startDate" />
      </EuiFormRow>
    </EuiForm>
    <EuiSpacer size="l" />
    <RecordTable
      items={recordTableItems}
      columns={recordTableColumns}
      selectedItems={[]}
      addButtonText="Adaugă produs/serviciu"
      noItemsText="Nu există produse/servicii de afișat"
      itemText="produs/serviciu"
      itemsText="produse/servicii"
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
      onSelectedItemsChange={action("onSelectedItemsChange")}
    />
    <EuiSpacer size="l" />
  </>
);

stories.add(
  `Example`,
  () => (
    <Record
      initialIsPopoverOpen={false}
      actions={recordActions}
      breadcrumbs={recordBreadcrumbs}
      isDeleting={false}
      isUpdating={false}
      canDelete={false}
      canUpdate={false}
      showDeleteButton={true}
      itemText="Factură"
      status="loaded"
      onUpdate={action("onUpdate")}
      onDelete={action("onDelete")}
      onUpgrade={action("onUpgrade")}
    >
      {children}
    </Record>
  ),
  {
    readme: {
      sidebar: getReadmeText({
        "I18n tokens": ["record.actions", "record.update", "record.delete"],
      }),
    },
  }
);

const cases = getCases({
  actions: [
    [],
    [{ id: "singleAction", name: "Acțiune", onClick: action("onClick") }],
    recordActions,
  ],
  breadcrumbs: [recordBreadcrumbs],
  isDeleting: [true, false],
  isUpdating: [true, false],
  canDelete: [true, false],
  canUpdate: [true, false],
  showDeleteButton: [true, false],
  initialIsPopoverOpen: [true, false],
  itemText: ["Factură"],
  status: [
    "loading",
    "error",
    "restrictedView",
    "notFound",
    "loaded",
    "upgradeRequired",
  ],
  onUpdate: [action("onUpdate")],
  onDelete: [action("onDelete")],
  onUpgrade: [action("onUpgrade")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <Record {...props}>{children}</Record>,
    {
      readme: {
        sidebar: getReadmeText({
          Props: props,
        }),
      },
    }
  );
});
