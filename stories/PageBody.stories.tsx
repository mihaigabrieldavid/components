import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Records, RecordsTable, SignInForm } from "../src";
import { PageBody } from "../src/components/PageBody";
import { PageBodyContent } from "../src/components/PageBodyContent";
import { PageBodySide } from "../src/components/PageBodySide";
import { PageBodySideNav } from "../src/components/PageBodySideNav";
import {
  pageBodySideNavItems,
  recordsBreadcrumbs,
  recordsTableColumns,
  recordsTableFilters,
  recordsTableItems,
} from "./content";

const stories = storiesOf("PageBody", module);

stories.add(`Example`, () => (
  <PageBody background="#FFFFFF">
    <PageBodySide>
      <PageBodySideNav
        initialIsFlyoutOpen={false}
        title="Meniu aplicație"
        items={pageBodySideNavItems}
      />
    </PageBodySide>
    <PageBodyContent>
      <Records
        breadcrumbs={recordsBreadcrumbs}
        noItemsText="Nu există facturi de afișat"
        firstItemText="prima factură"
        itemText="factură"
        itemsText="facturi"
        canCreate={false}
        status="loaded"
        onCreate={action("onCreate")}
      >
        <RecordsTable
          pageIndex={0}
          searchQuery=""
          schema={undefined}
          items={recordsTableItems}
          columns={recordsTableColumns}
          selectedItems={[]}
          filters={recordsTableFilters}
          totalItemCount={100}
          itemText="factură"
          itemsText="facturi"
          canDelete={false}
          isDeleting={false}
          onPageIndexChange={action("onPageIndexChange")}
          onSelectedItemsChange={action("onSelectedItemsChange")}
          onDelete={action("onDelete")}
          onSearchChange={action("onSearchChange")}
        />
      </Records>
    </PageBodyContent>
  </PageBody>
));

stories.add(`Example 2`, () => (
  <PageBody background="#F4F6FA">
    <SignInForm
      status="default"
      onForgotPassword={action("onForgotPassword")}
      onSubmit={action("onSubmit")}
    />
  </PageBody>
));
