import { EuiFieldText, EuiForm, EuiFormRow, EuiSpacer } from "@elastic/eui";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {
  LoadingStatus,
  NotFoundStatus,
  Page,
  Record,
  Records,
  RecordsTable,
  SignInForm,
} from "../src";
import { AccountSecurityVerification } from "../src/components/AccountSecurityVerification";
import { InvitationToCollaborate } from "../src/components/InvitationToCollaborate";
import { PageBody } from "../src/components/PageBody";
import { PageBodyContent } from "../src/components/PageBodyContent";
import { PageBodySide } from "../src/components/PageBodySide";
import { PageBodySideHeader } from "../src/components/PageBodySideHeader";
import { PageBodySideNav } from "../src/components/PageBodySideNav";
import { PageHeader } from "../src/components/PageHeader";
import {
  pageBodySideNavItems,
  pageHeaderItems,
  pageHeaderLogoSrc,
  recordsBreadcrumbs,
  recordsTableColumns,
  recordsTableFilters,
  recordsTableItems,
} from "./content";

const stories = storiesOf("Page", module);

const items = [
  {
    id: "Contul meu",
    name: "Contul meu",
    items: [
      {
        id: "Utilizator",
        name: "Utilizator",
        onClick: action("onClick"),
      },
      {
        id: "Spații de lucru",
        name: "Spații de lucru",
        onClick: action("onClick"),
      },
      {
        id: "Tichete",
        name: "Tichete",
        onClick: action("onClick"),
      },
    ],
  },
];

stories.add(`Example`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideHeader
          item={{ id: "1", name: "My workspace" }}
          initialIsPopoverOpen={false}
          items={[
            { id: "1", name: "My workspace" },
            { id: "2", name: "Workspace 2" },
            { id: "3", name: "Workspace 3" },
          ]}
          noItemsMessage=""
          onClick={action("onClick")}
        />
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
  </Page>
));

stories.add(`Example 2`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName=""
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#F4F6FA">
      <SignInForm
        status="default"
        onForgotPassword={action("onForgotPassword")}
        onSubmit={action("onSubmit")}
      />
    </PageBody>
  </Page>
));

stories.add(`Example 3`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="John Doe"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideNav
          initialIsFlyoutOpen={false}
          title="Meniu contul meu"
          items={items}
        />
      </PageBodySide>
      <PageBodyContent>
        <Record
          actions={[]}
          breadcrumbs={[
            {
              text: "Contul meu",
              href: "#",
              color: "primary",
              onClick: (e: any) => {
                e.preventDefault();
              },
            },
            {
              text: "Pagina curentă",
            },
          ]}
          initialIsPopoverOpen={false}
          isDeleting={false}
          isUpdating={false}
          canDelete={false}
          canUpdate={false}
          showDeleteButton={false}
          itemText="Utilizator"
          status="loaded"
          onUpdate={action("onUpdate")}
          onDelete={action("onDelete")}
        >
          <EuiForm component="form">
            <EuiFormRow label="Nume">
              <EuiFieldText name="name" />
            </EuiFormRow>
            <EuiFormRow label="Email">
              <EuiFieldText name="email" />
            </EuiFormRow>
            <EuiFormRow label="Parolă">
              <EuiFieldText name="password" />
            </EuiFormRow>
            <EuiFormRow label="Telefon">
              <EuiFieldText name="phone" />
            </EuiFormRow>
          </EuiForm>
          <EuiSpacer size="s" />
        </Record>
      </PageBodyContent>
    </PageBody>
  </Page>
));

stories.add(`Example 4`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideHeader
          item={{ id: "1", name: "My workspace" }}
          initialIsPopoverOpen={false}
          items={[{ id: "1", name: "My workspace" }]}
          noItemsMessage="Creează un nou workspace și o să apară aici în meniu"
          onClick={action("onClick")}
        />
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
          status="empty"
          onCreate={action("onCreate")}
        >
          records table
        </Records>
      </PageBodyContent>
    </PageBody>
  </Page>
));

stories.add(`Example 5`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideHeader
          item={{ id: "1", name: "My workspace" }}
          initialIsPopoverOpen={false}
          items={[{ id: "1", name: "My workspace" }]}
          noItemsMessage="Creează un nou workspace și o să apară aici în meniu"
          onClick={action("onClick")}
        />
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
          status="error"
          onCreate={action("onCreate")}
        >
          records table
        </Records>
      </PageBodyContent>
    </PageBody>
  </Page>
));

stories.add(`Example 6`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideHeader
          item={{ id: "1", name: "My workspace" }}
          initialIsPopoverOpen={false}
          items={[
            { id: "1", name: "My workspace" },
            { id: "2", name: "Workspace 2" },
            { id: "3", name: "Workspace 3" },
          ]}
          noItemsMessage=""
          onClick={action("onClick")}
        />
        <PageBodySideNav
          initialIsFlyoutOpen={false}
          title="Meniu aplicație"
          items={pageBodySideNavItems}
        />
      </PageBodySide>
      <PageBodyContent>
        <Record
          actions={[]}
          breadcrumbs={recordsBreadcrumbs}
          initialIsPopoverOpen={false}
          isDeleting={false}
          isUpdating={false}
          canDelete={false}
          canUpdate={false}
          showDeleteButton={false}
          itemText="Factură"
          status="notFound"
          onUpdate={action("onUpdate")}
          onDelete={action("onDelete")}
        >
          form
        </Record>
      </PageBodyContent>
    </PageBody>
  </Page>
));

stories.add(`Example 7`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <PageBodySide>
        <PageBodySideHeader
          item={{ id: "1", name: "My workspace" }}
          initialIsPopoverOpen={false}
          items={[
            { id: "1", name: "My workspace" },
            { id: "2", name: "Workspace 2" },
            { id: "3", name: "Workspace 3" },
          ]}
          noItemsMessage=""
          onClick={action("onClick")}
        />
        <PageBodySideNav
          initialIsFlyoutOpen={false}
          title="Meniu aplicație"
          items={pageBodySideNavItems}
        />
      </PageBodySide>
      <PageBodyContent>
        <NotFoundStatus />
      </PageBodyContent>
    </PageBody>
  </Page>
));

stories.add(`Example 8`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#FFFFFF">
      <NotFoundStatus />
    </PageBody>
  </Page>
));

stories.add(`Example 9`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#F4F6FA">
      <LoadingStatus />
    </PageBody>
  </Page>
));

stories.add(`Example 10`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#F4F6FA">
      <AccountSecurityVerification status="success" />
    </PageBody>
  </Page>
));

stories.add(`Example 11`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="Mihai-Gabriel David"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#F4F6FA">
      <InvitationToCollaborate
        userName="Popescu Cristian"
        subtitle="Nume workspace"
        message="Te-a invitat să colaborezi cu el"
        email="john.doe@domain.com"
        status="signUp"
        body="Dorești să accepți invitația și să devii un colaborator?"
        onAccept={action("onAccept")}
        onDecline={action("onDecline")}
        onSignUp={action("onSignUp")}
        onAgreement={action("onAgreement")}
      />
    </PageBody>
  </Page>
));

stories.add(`Example 12`, () => (
  <Page>
    <PageHeader
      initialIsFlyoutOpen={false}
      initialIsPopoverOpen={false}
      userName="David Mihai-Gabriel"
      logoSrc={pageHeaderLogoSrc}
      items={pageHeaderItems}
      onMyAccount={action("onMyAccount")}
      onSignOut={action("onSignOut")}
      onSignIn={action("onSignIn")}
      onTryFree={action("onTryFree")}
      onApplication={action("onApplication")}
      onLogo={action("onLogo")}
    />
    <PageBody background="#F4F6FA">
      <InvitationToCollaborate
        userName="Popescu Cristian"
        subtitle="Nume workspace"
        message="Te-a invitat să colaborezi cu el"
        email="john.doe@domain.com"
        status="accept"
        body="Dorești să accepți invitația și să devii un colaborator?"
        onAccept={action("onAccept")}
        onDecline={action("onDecline")}
        onSignUp={action("onSignUp")}
        onAgreement={action("onAgreement")}
      />
    </PageBody>
  </Page>
));