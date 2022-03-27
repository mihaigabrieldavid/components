import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Records, RecordsTable } from "../src";
import { PageBodyContent } from "../src/components/PageBodyContent";
import {
  recordsBreadcrumbs,
  recordsTableColumns,
  recordsTableFilters,
  recordsTableItems,
} from "./content";

const stories = storiesOf("PageBodyContent", module);

stories.add(`Example`, () => (
  <PageBodyContent>
    <Records
      breadcrumbs={recordsBreadcrumbs}
      noItemsText="Nu există facturi de afișat"
      firstItemText="prima factură"
      itemText="factură"
      itemsText="facturi"
      canCreate={false}
      status="error"
      onCreate={action("onCreate")}
    >
      records table
    </Records>
  </PageBodyContent>
));

stories.add(`Example 2`, () => (
  <PageBodyContent>
    <Records
      breadcrumbs={recordsBreadcrumbs}
      noItemsText="Nu există facturi de afișat"
      firstItemText="prima factură"
      itemText="factură"
      itemsText="facturi"
      canCreate={false}
      status="restrictedView"
      onCreate={action("onCreate")}
    >
      records table
    </Records>
  </PageBodyContent>
));
