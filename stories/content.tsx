import {
  EuiBadge,
  EuiBreadcrumb,
  EuiLink,
  SearchFilterConfig,
} from "@elastic/eui";
import { action } from "@storybook/addon-actions";
import { RecordsTable } from "../src";

export const pageBodySideNavItems = [
  {
    id: "Configurări",
    name: "Configurări",
    items: [
      {
        id: "Email",
        name: "Email",
        onClick: action("onClick"),
      },
      {
        id: "Workspace",
        name: "Workspace",
        onClick: action("onClick"),
      },
      {
        id: "Alte configurări",
        name: "Alte configurări",
        onClick: action("onClick"),
      },
    ],
  },
  {
    id: "Setări",
    name: "Setări",
    items: [
      {
        id: "Securitate",
        name: "Securitate",
        onClick: action("onClick"),
      },
      {
        id: "Plăți",
        name: "Plăți",
        onClick: action("onClick"),
      },
      {
        id: "Abonament",
        name: "Abonament",
        onClick: action("onClick"),
      },
      {
        id: "Facturi",
        name: "Facturi",
        onClick: action("onClick"),
      },
    ],
  },
  {
    id: "Integrări",
    name: "Integrări",
    items: [
      {
        id: "Api",
        name: "Api",
        onClick: action("onClick"),
      },
      {
        id: "Documentație",
        name: "Documentație",
        onClick: action("onClick"),
      },
    ],
  },
];

export const recordsTableItems = [
  {
    invoice: { value: "XX0225", href: "" },
    client: { value: "HERACLIOS SRL", href: "" },
    startDate: "27/05/2019",
    endDate: "26/06/2019",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    status: "Încasată",
    uuid: "f0b4e2c2-fb89-4937-a3dc-9739431a1a1b",
  },
  {
    invoice: { value: "XX0223", href: "" },
    client: { value: "NESIN SA", href: "" },
    startDate: "27/05/2019",
    endDate: "26/06/2019",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    status: "Depășită",
    uuid: "b965d765-07e8-44f6-8b34-4705bf45fa32",
  },
  {
    invoice: { value: "XX0222", href: "" },
    client: { value: "VENDUTA SRL", href: "" },
    startDate: "27/05/2019",
    endDate: "26/06/2019",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    status: "Anulată",
    uuid: "34f5704c-1747-4559-a470-308abe65fd84",
  },
];

export const recordsTableColumns = [
  {
    name: "Factura",
    field: "invoice",
    render: (invoice: any) => <EuiLink>{invoice.value}</EuiLink>,
  },
  {
    name: "Client",
    field: "client",
    render: (client: any) => <EuiLink>{client.value}</EuiLink>,
  },
  { name: "Data emiterii", field: "startDate" },
  { name: "Data scadenței", field: "endDate" },
  { name: "Valoare fără TVA", field: "amountWithoutVat" },
  { name: "Valoare TVA", field: "vatAmount" },
  { name: "Total", field: "total" },
  {
    name: "Status",
    field: "status",
    render: (status: string) => {
      const color =
        status === "Încasată"
          ? "success"
          : status === "Depășită"
          ? "danger"
          : "warning";
      return <EuiBadge color={color}>{status}</EuiBadge>;
    },
  },
];

export const recordsTableFilters: SearchFilterConfig[] = [
  {
    type: "field_value_toggle_group",
    field: "status",
    items: [
      {
        value: "open",
        name: "Open",
      },
      {
        value: "closed",
        name: "Closed",
      },
    ],
  },
  {
    type: "is",
    field: "active",
    name: "Active",
    negatedName: "Inactive",
  },
  {
    type: "field_value_toggle",
    name: "Mine",
    field: "owner",
    value: "dewey",
  },
];

export const recordsTableSchema = {
  strict: true,
  fields: {
    type: {
      type: "string",
    },
    active: {
      type: "boolean",
    },
    status: {
      type: "string",
    },
    followers: {
      type: "number",
    },
    comments: {
      type: "number",
    },
    stars: {
      type: "number",
    },
    created: {
      type: "date",
    },
    owner: {
      type: "string",
    },
  },
};

export const recordsTableSelectedItems = [
  {
    invoice: { value: "XX0225", href: "" },
    client: { value: "HERACLIOS SRL", href: "" },
    startDate: "27/05/2019",
    endDate: "26/06/2019",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    status: "Încasată",
    uuid: "f0b4e2c2-fb89-4937-a3dc-9739431a1a1b",
  },
];

export const recordsBreadcrumbs: EuiBreadcrumb[] = [
  {
    text: "Aplicație",
    href: "#",
    color: "primary",
    onClick: (e: any) => {
      e.preventDefault();
    },
  },
  {
    text: "Pagina curentă",
  },
];

export const recordActions = [
  { id: "copy", name: "Copiază", onClick: action("onClick") },
  { id: "edit", name: "Editează", onClick: action("onClick") },
  { id: "share", name: "Distribuie", onClick: action("onClick") },
];

export const recordBreadcrumbs: EuiBreadcrumb[] = [
  {
    text: "Aplicație",
    href: "#",
    color: "primary",
    onClick: (e: any) => {
      e.preventDefault();
    },
  },
  {
    text: "Facturi",
    href: "#",
    color: "primary",
    onClick: (e: any) => {
      e.preventDefault();
    },
  },
  {
    text: "Pagina curentă",
  },
];

export const pageHeaderItems = [
  { id: "prices", name: "Prețuri", onClick: action("onClick") },
  { id: "services", name: "Servicii", onClick: action("onClick") },
  { id: "blog", name: "Blog", onClick: action("onClick") },
  { id: "contact", name: "Contact", onClick: action("onClick") },
];

export const recordTableItems = [
  {
    order: "1",
    product: { value: "Mackbook Pro 2019", href: "" },
    measurementUnit: "BUC",
    quantity: "1",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    uuid: "f0b4e2c2-fb89-4937-a3dc-9739431a1a1b",
  },
  {
    order: "2",
    product: { value: "Mackbook Pro 2022", href: "" },
    measurementUnit: "BUC",
    quantity: "1",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    uuid: "b965d765-07e8-44f6-8b34-4705bf45fa32",
  },
];

export const recordTableColumns = [
  {
    name: "Nr.Crt.",
    field: "order",
  },
  {
    name: "Produs",
    field: "product",
    render: (product: any) => <EuiLink>{product.value}</EuiLink>,
  },
  { name: "U.M.", field: "measurementUnit" },
  { name: "Cant.", field: "quantity" },
  { name: "Valoare fără TVA", field: "amountWithoutVat" },
  { name: "Valoare TVA", field: "vatAmount" },
  { name: "Total", field: "total" },
];

export const recordTableSelectedItems = [
  {
    invoice: { value: "XX0225", href: "" },
    client: { value: "HERACLIOS SRL", href: "" },
    startDate: "27/05/2019",
    endDate: "26/06/2019",
    amountWithoutVat: "211.76",
    vatAmount: "40.23",
    total: "251.99",
    status: "Încasată",
    uuid: "f0b4e2c2-fb89-4937-a3dc-9739431a1a1b",
  },
];

export const pageHeaderLogoSrc =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjE3MiIgdmlld0JveD0iMCAwIDUwMCAxNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNV8yMSkiPgo8cGF0aCBkPSJNMTcyLjA1IDg5Ljc5QzE3Mi4wNjYgODIuODA4NiAxNjkuOTI0IDc1Ljk5MjkgMTY1LjkxNSA3MC4yNzY3QzE2MS45MDcgNjQuNTYwNiAxNTYuMjI5IDYwLjIyMzYgMTQ5LjY2IDU3Ljg2QzE1MC4yNTggNTQuODEzIDE1MC41NTkgNTEuNzE1MiAxNTAuNTYgNDguNjFDMTUwLjU2NiAzOC4zMzE5IDE0Ny4zMTIgMjguMzE2NyAxNDEuMjY3IDIwLjAwNDNDMTM1LjIyMiAxMS42OTE5IDEyNi42OTcgNS41MTA0MyAxMTYuOTE3IDIuMzQ4N0MxMDcuMTM4IC0wLjgxMzAzOCA5Ni42MDcyIC0wLjc5MjIwMiA4Ni44NDAxIDIuNDA4MjFDNzcuMDczIDUuNjA4NjMgNjguNTcyMiAxMS44MjM4IDYyLjU2MDEgMjAuMTZDNTguMTI0NiAxNi43MjI5IDUyLjY4OTggMTQuODI0OCA0Ny4wNzg4IDE0Ljc1MzVDNDEuNDY3OCAxNC42ODIyIDM1Ljk4NjUgMTYuNDQxNCAzMS40NjUgMTkuNzY0NkMyNi45NDM1IDIzLjA4NzkgMjMuNjI4MyAyNy43OTQyIDIyLjAyMTQgMzMuMTcwN0MyMC40MTQ2IDM4LjU0NzEgMjAuNjAzNyA0NC4zMDA3IDIyLjU2MDEgNDkuNTZDMTUuOTc1NCA1MS45NjAxIDEwLjI4MzcgNTYuMzE5MSA2LjI1MDQyIDYyLjA1MDdDMi4yMTcxOSA2Ny43ODI0IDAuMDM1OTUzOSA3NC42MTE3IDAuMDAwMTE1MjkxIDgxLjYyQy0wLjAxODE1NiA4OC42MjU2IDIuMTM1NzEgOTUuNDY0NiA2LjE2NTE3IDEwMS4xOTVDMTAuMTk0NiAxMDYuOTI2IDE1LjkwMTUgMTExLjI2NyAyMi41MDAxIDExMy42MkMyMS45MTYgMTE2LjY2NiAyMS42MTggMTE5Ljc1OSAyMS42MTAxIDEyMi44NkMyMS42MDAzIDEzMy4xMjYgMjQuODUxMSAxNDMuMTMgMzAuODkzNyAxNTEuNDNDMzYuOTM2NCAxNTkuNzI5IDQ1LjQ1ODYgMTY1Ljg5NSA1NS4yMzE3IDE2OS4wMzlDNjUuMDA0OCAxNzIuMTgyIDc1LjUyMzcgMTcyLjE0MSA4NS4yNzE3IDE2OC45MkM5NS4wMTk3IDE2NS43IDEwMy40OTMgMTU5LjQ2NyAxMDkuNDcgMTUxLjEyQzExMy44OTMgMTU0LjU2NiAxMTkuMzE4IDE1Ni40NzUgMTI0LjkyNCAxNTYuNTU5QzEzMC41MyAxNTYuNjQzIDEzNi4wMSAxNTQuODk2IDE0MC41MzMgMTUxLjU4NEMxNDUuMDU3IDE0OC4yNzEgMTQ4LjM3NyAxNDMuNTc0IDE0OS45ODkgMTM4LjIwNUMxNTEuNjAyIDEzMi44MzUgMTUxLjQyIDEyNy4wODcgMTQ5LjQ3IDEyMS44M0MxNTYuMDU4IDExOS40MzQgMTYxLjc1NCAxMTUuMDc2IDE2NS43ODkgMTA5LjM0NEMxNjkuODI1IDEwMy42MTIgMTcyLjAwNiA5Ni43ODAzIDE3Mi4wNCA4OS43NyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY3LjY0IDczLjgxTDEwNS4yOSA5MUwxNDMuMjkgNTcuNzJDMTQzLjgzNyA1NC45NzQgMTQ0LjEwOSA1Mi4xODAxIDE0NC4xIDQ5LjM4QzE0NC4wOTggNDAuMzE1IDE0MS4xOTUgMzEuNDg4NiAxMzUuODE1IDI0LjE5MjNDMTMwLjQzNiAxNi44OTYgMTIyLjg2MyAxMS41MTI5IDExNC4yMDMgOC44MzA2OEMxMDUuNTQ0IDYuMTQ4NDYgOTYuMjU0IDYuMzA3OTMgODcuNjkyMSA5LjI4NTc1Qzc5LjEzMDEgMTIuMjYzNiA3MS43NDU5IDE3LjkwMzQgNjYuNjIgMjUuMzhMNjAuMjkgNTguMTJMNjcuNjQgNzMuODFaIiBmaWxsPSIjRkVDNTE0Ii8+CjxwYXRoIGQ9Ik0yOC42NzAxIDExMy42OEMyOC4xMTUgMTE2LjQ2OSAyNy44MzY5IDExOS4zMDYgMjcuODQwMSAxMjIuMTVDMjcuODQwMyAxMzEuMjUzIDMwLjc1ODMgMTQwLjExNiAzNi4xNjU5IDE0Ny40MzhDNDEuNTczNSAxNTQuNzYxIDQ5LjE4NTggMTYwLjE1NyA1Ny44ODU3IDE2Mi44MzVDNjYuNTg1NiAxNjUuNTEzIDc1LjkxNDkgMTY1LjMzMiA4NC41MDQzIDE2Mi4zMThDOTMuMDkzNyAxNTkuMzA1IDEwMC40OTEgMTUzLjYxNyAxMDUuNjEgMTQ2LjA5TDExMS44OCAxMTMuNDJMMTAzLjUxIDk3LjQyMDFMNjUuNzIwMSA4MC4yMDAxTDI4LjY3MDEgMTEzLjY4WiIgZmlsbD0iIzAwQkZCMyIvPgo8cGF0aCBkPSJNMjguNDQwMSA0OC41M0w1NC4yNDAxIDU0LjYyTDU5Ljg5MDEgMjUuMjhDNTYuMzgwOSAyMi42MTkxIDUyLjEwNDIgMjEuMTY2NSA0Ny43MDA0IDIxLjEzOTdDNDMuMjk2NSAyMS4xMTI4IDM5LjAwMjQgMjIuNTEzMyAzNS40NjExIDI1LjEzMTNDMzEuOTE5OCAyNy43NDkyIDI5LjMyMTggMzEuNDQzOSAyOC4wNTYxIDM1LjY2MkMyNi43OTA0IDM5Ljg4MDIgMjYuOTI1MSA0NC4zOTQ4IDI4LjQ0MDEgNDguNTNaIiBmaWxsPSIjRjA0RTk4Ii8+CjxwYXRoIGQ9Ik0yNi4yMDAyIDU0LjY3QzIwLjUzOTQgNTYuNTgwMiAxNS42MTQ2IDYwLjIwNzEgMTIuMTEwOCA2NS4wNDYxQzguNjA2OTUgNjkuODg1MiA2LjY5ODI1IDc1LjY5NTkgNi42NTAxNSA4MS42N0M2LjY0NjA4IDg3LjQ0MzkgOC4zOTk0OSA5My4wODIyIDExLjY3NzMgOTcuODM1NEMxNC45NTUgMTAyLjU4OSAxOS42MDE5IDEwNi4yMzIgMjUuMDAwMiAxMDguMjhMNjEuMjAwMiA3NS41Nkw1NC41NTAyIDYxLjM2TDI2LjIwMDIgNTQuNjdaIiBmaWxsPSIjMUJBOUY1Ii8+CjxwYXRoIGQ9Ik0xMTIuMjMgMTQ2LjA5QzExNS43MzQgMTQ4LjczNyAxMjAgMTUwLjE4MSAxMjQuMzkxIDE1MC4yMDRDMTI4Ljc4MiAxNTAuMjI3IDEzMy4wNjMgMTQ4LjgzIDEzNi41OTQgMTQ2LjIyQzE0MC4xMjYgMTQzLjYxIDE0Mi43MTggMTM5LjkyNyAxNDMuOTg1IDEzNS43MjJDMTQ1LjI1MSAxMzEuNTE4IDE0NS4xMjMgMTI3LjAxNiAxNDMuNjIgMTIyLjg5TDExNy44NCAxMTYuODlMMTEyLjIzIDE0Ni4wOVoiIGZpbGw9IiM5M0M5MEUiLz4KPHBhdGggZD0iTTExNy40NyAxMTAuMUwxNDUuODUgMTE2LjczQzE1MS41MTQgMTE0LjgyNSAxNTYuNDQyIDExMS4yIDE1OS45NDcgMTA2LjM1OUMxNjMuNDUyIDEwMS41MTkgMTY1LjM1OCA5NS43MDU3IDE2NS40IDg5LjczMDFDMTY1LjM5NSA4My45Njg0IDE2My42MzggNzguMzQ0NSAxNjAuMzYzIDczLjYwNDRDMTU3LjA4NyA2OC44NjQ0IDE1Mi40NDggNjUuMjMyMyAxNDcuMDYgNjMuMTkwMUwxMDkuOTQgOTUuNjkwMUwxMTcuNDcgMTEwLjFaIiBmaWxsPSIjMDA3N0NDIi8+CjxwYXRoIGQ9Ik0yNDAuNTYgMTIwLjRMMjQ0IDEyMC4wNUwyNDQuMjQgMTI3LjA1QzIzNi41ODUgMTI4LjIwNiAyMjguODYxIDEyOC44NDEgMjIxLjEyIDEyOC45NUMyMTIuNTg3IDEyOC45NSAyMDYuNTQgMTI2LjQ4IDIwMi45OCAxMjEuNTRDMTk5LjQyIDExNi42IDE5Ny42NDMgMTA4LjkxMyAxOTcuNjUgOTguNDhDMTk3LjY1IDc3LjcgMjA1LjkxIDY3LjMwNjcgMjIyLjQzIDY3LjNDMjMwLjQzIDY3LjMgMjM2LjM5NyA2OS41MzM0IDI0MC4zMyA3NEMyNDQuMjY0IDc4LjQ2NjcgMjQ2LjIzNyA4NS40NjY3IDI0Ni4yNSA5NUwyNDUuNzggMTAxLjc2SDIwNi42NkMyMDYuNjYgMTA4LjMyIDIwNy44NDcgMTEzLjE4IDIxMC4yMiAxMTYuMzRDMjEyLjU5NCAxMTkuNSAyMTYuNzIgMTIxLjA4IDIyMi42IDEyMS4wOEMyMjguNDk0IDEyMS4xIDIzNC40OCAxMjAuODczIDI0MC41NiAxMjAuNFpNMjM3LjM2IDk0LjY4QzIzNy4zNiA4Ny40MDY3IDIzNi4xOTcgODIuMjcgMjMzLjg3IDc5LjI3QzIzMS41NDMgNzYuMjcgMjI3Ljc1IDc0Ljc2NjcgMjIyLjQ5IDc0Ljc2QzIxNy4yMyA3NC43NiAyMTMuMjc3IDc2LjM0IDIxMC42MyA3OS41QzIwNy45ODQgODIuNjYgMjA2LjYyIDg3LjcyIDIwNi41NCA5NC42OEgyMzcuMzZaIiBmaWxsPSIjMUMxRTIzIi8+CjxwYXRoIGQ9Ik0yNTguNjUgMTI4LjQ4VjUwLjQ4SDI2Ny41NFYxMjguNDhIMjU4LjY1WiIgZmlsbD0iIzFDMUUyMyIvPgo8cGF0aCBkPSJNMzIzLjUzIDg2LjM4VjExNi4yOEMzMjMuNTMgMTE5LjI4IDMzMC45MSAxMTkuMTIgMzMwLjkxIDExOS4xMkwzMzAuNDYgMTI2Ljk4QzMyNC4yMSAxMjYuOTggMzE5LjA0IDEyNy41IDMxNS45NCAxMjQuNDlDMzA5LjIyNyAxMjcuNDcyIDMwMS45NTUgMTI4Ljk4OSAyOTQuNjEgMTI4Ljk0QzI4OS4xNjMgMTI4Ljk0IDI4NS4wMTMgMTI3LjM5NyAyODIuMTYgMTI0LjMxQzI3OS4zMDcgMTIxLjIyMyAyNzcuODgzIDExNi43ODcgMjc3Ljg5IDExMUMyNzcuODkgMTA1LjIyNyAyNzkuMzUzIDEwMC45NzcgMjgyLjI4IDk4LjI1QzI4NS4yMDcgOTUuNTIzNCAyODkuNzkgOTMuODU2NyAyOTYuMDMgOTMuMjVMMzE0LjY0IDkxLjQ4Vjg2LjM4QzMxNC42NCA4Mi4zOCAzMTMuNzczIDc5LjQ5MzQgMzEyLjA0IDc3LjcyQzMxMS4wOSA3Ni44Mjg1IDMwOS45NyA3Ni4xMzg1IDMwOC43NDYgNzUuNjkxN0MzMDcuNTIyIDc1LjI0NDkgMzA2LjIyMSA3NS4wNTA0IDMwNC45MiA3NS4xMkgyODEuNTZWNjcuMjlIMzA0LjMzQzMxMS4wNSA2Ny4yOSAzMTUuOTMgNjguODMzNCAzMTguOTcgNzEuOTJDMzIyLjAxIDc1LjAwNjcgMzIzLjUzIDc5LjgyNjcgMzIzLjUzIDg2LjM4Wk0yODcgMTEwLjU2QzI4NyAxMTcuODMzIDI5MCAxMjEuNDcgMjk2IDEyMS40N0MzMDEuNDEzIDEyMS40NjQgMzA2Ljc4NiAxMjAuNTQxIDMxMS44OSAxMTguNzRMMzE0LjYxIDExNy43OVY5OC4yM0wyOTcuMSA5OS44OUMyOTMuNTQgMTAwLjIxIDI5MC45NyAxMDEuMjM3IDI4OS4zOSAxMDIuOTdDMjg3LjgxIDEwNC43MDMgMjg3LjAxMyAxMDcuMjMzIDI4NyAxMTAuNTZaIiBmaWxsPSIjMUMxRTIzIi8+CjxwYXRoIGQ9Ik0zNTguMjQgNzUuMjRDMzQ5LjYyIDc1LjI0IDM0NS4zMSA3OC4yNCAzNDUuMzEgODQuMjRDMzQ1LjMxIDg3LjAxMzQgMzQ2LjMxIDg4Ljk3IDM0OC4zMSA5MC4xMUMzNTAuMzEgOTEuMjUgMzU0LjgxNCA5Mi40MzY3IDM2MS44MiA5My42N0MzNjguODYgOTQuOTAzNCAzNzMuODQgOTYuNjIzNCAzNzYuNzYgOTguODNDMzc5LjY4IDEwMS4wMzcgMzgxLjE0NCAxMDUuMTgzIDM4MS4xNSAxMTEuMjdDMzgxLjE1IDExNy4zNjMgMzc5LjE5NCAxMjEuODMgMzc1LjI4IDEyNC42N0MzNzEuMzY3IDEyNy41MSAzNjUuNjU3IDEyOC45MzMgMzU4LjE1IDEyOC45NEMzNTMuMjUgMTI4Ljk0IDMzNi44OSAxMjcuMTIgMzM2Ljg5IDEyNy4xMkwzMzcuMzcgMTE5LjQyQzM0Ni43NyAxMjAuMzIgMzUzLjU2IDEyMC45OSAzNTguMTUgMTIwLjk5QzM2Mi43NCAxMjAuOTkgMzY2LjIzIDEyMC4yNiAzNjguNjQgMTE4LjhDMzcxLjA1IDExNy4zNCAzNzIuMjUgMTE0Ljg5IDM3Mi4yNSAxMTEuNDVDMzcyLjI1IDEwOC4wMSAzNzEuMjUgMTA1LjY4IDM2OS4xNyAxMDQuNDVDMzY3LjA5IDEwMy4yMiAzNjIuNjEgMTAyLjA2IDM1NS42NiAxMDAuOTVDMzQ4LjcxIDk5Ljg0IDM0My43NiA5OC4yMiAzNDAuODQgOTYuMDlDMzM3LjkyIDkzLjk2IDMzNi40NSA5MCAzMzYuNDUgODQuMjNDMzM2LjQ1IDc4LjQ2IDMzOC40NSA3NC4yMyAzNDIuNTYgNzEuNDNDMzQ2LjY3IDY4LjYzIDM1MS43MSA2Ny4yOCAzNTcuNzkgNjcuMjhDMzYyLjYxIDY3LjI4IDM3OS4zNCA2OC41MSAzNzkuMzQgNjguNTFWNzYuMjZDMzcwLjUxIDc1Ljg3IDM2My4yOSA3NS4yNCAzNTguMjQgNzUuMjRaIiBmaWxsPSIjMUMxRTIzIi8+CjxwYXRoIGQ9Ik00MjQgNzYuMTgwMUg0MDUuMTVWMTA0LjUyQzQwNS4xNSAxMTEuMzEzIDQwNS42NDMgMTE1Ljc3NyA0MDYuNjMgMTE3LjkxQzQwNy42MyAxMjAuMDUgNDA5Ljk3IDEyMS4xMSA0MTMuNjggMTIxLjExTDQyNC4yMyAxMjAuNEw0MjQuODMgMTI3Ljc1QzQyMC44MzUgMTI4LjQ4OSA0MTYuNzkgMTI4LjkyNiA0MTIuNzMgMTI5LjA2QzQwNi41NyAxMjkuMDYgNDAyLjMwMyAxMjcuNTU3IDM5OS45MyAxMjQuNTVDMzk3LjU1NyAxMjEuNTQzIDM5Ni4zNzMgMTE1LjgxMyAzOTYuMzggMTA3LjM2Vjc2LjE4MDFIMzg4VjY4LjQ4MDFIMzk2LjQyVjUwLjM0MDFINDA1LjE5VjY4LjQ4MDFINDI0Vjc2LjE4MDFaIiBmaWxsPSIjMUMxRTIzIi8+CjxwYXRoIGQ9Ik00MzYuMzYgNjAuOTEwMVY1MC41OTAxSDQ0NS4yNVY2MC45MTAxSDQzNi4zNlpNNDM2LjM2IDEyOC40OFY2OC40ODAxSDQ0NS4yNVYxMjguNDhINDM2LjM2WiIgZmlsbD0iIzFDMUUyMyIvPgo8cGF0aCBkPSJNNDgzLjc2IDY3LjI5QzQ4OC4yIDY3LjQ3OTUgNDkyLjYyMiA2Ny45NTcyIDQ5NyA2OC43Mkw0OTkuODQgNjkuMDdMNDk5LjQ5IDc2LjNDNDk0Ljg0NCA3NS43MTE0IDQ5MC4xNzIgNzUuMzU3NiA0ODUuNDkgNzUuMjRDNDc4Ljc3IDc1LjI0IDQ3NC4yMDcgNzYuODQgNDcxLjggODAuMDRDNDY5LjM5MyA4My4yNCA0NjguMTg3IDg5LjE2NjcgNDY4LjE4IDk3LjgyQzQ2OC4xOCAxMDYuNDg3IDQ2OS4zMDcgMTEyLjUxMyA0NzEuNTYgMTE1LjlDNDczLjgxMyAxMTkuMjg3IDQ3OC41MTMgMTIwLjk4NyA0ODUuNjYgMTIxTDQ5OS42NiAxMTkuOTRMNTAwLjAyIDEyNy4yOUM0OTQuNTcgMTI4LjIxMyA0ODkuMDY1IDEyOC43NjggNDgzLjU0IDEyOC45NUM0NzQuMyAxMjguOTUgNDY3LjkyIDEyNi41NzcgNDY0LjQgMTIxLjgzQzQ2MC44OCAxMTcuMDgzIDQ1OS4xMiAxMDkuMDgzIDQ1OS4xMiA5Ny44M0M0NTkuMTIgODYuNTcgNDYxLjAxNyA3OC42NjY3IDQ2NC44MSA3NC4xMkM0NjguNjAzIDY5LjU3MzQgNDc0LjkyIDY3LjI5NjcgNDgzLjc2IDY3LjI5WiIgZmlsbD0iIzFDMUUyMyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1XzIxIj4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxNzEuMzgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

export const recordsTable = (
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
);
