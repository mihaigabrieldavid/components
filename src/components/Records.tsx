import {
  EuiBreadcrumb,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiSpacer,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { ReactNode } from "react";
import { capitalizeFirstLetter } from "../utils";
import { ErrorStatus } from "./ErrorStatus";
import { LoadingStatus } from "./LoadingStatus";
import { PermissionButton } from "./PermissionButton";
import { RestrictedViewStatus } from "./RestrictedViewStatus";

export type RecordsProps = {
  itemText: string;
  itemsText: string;
  noItemsText: string;
  firstItemText: string;
  canCreate: boolean;
  breadcrumbs: EuiBreadcrumb[];
  children: ReactNode;
  status: "loading" | "error" | "restrictedView" | "empty" | "loaded";
  onCreate: () => void;
};

export const Records = ({
  noItemsText,
  itemText,
  itemsText,
  firstItemText,
  canCreate,
  status,
  breadcrumbs,
  children,
  onCreate,
}: RecordsProps) => {
  const create = useEuiI18n("records.create", "Creează");
  const startCreating = useEuiI18n("records.startCreating", "Începe să creezi");
  const now = useEuiI18n("records.now", "Acum");
  const title = capitalizeFirstLetter(itemsText);

  return (
    <EuiFlexItem grow={false}>
      <EuiHeaderBreadcrumbs
        breadcrumbs={breadcrumbs}
        truncate={true}
        responsive={false}
        max={3}
        css={{ marginLeft: 0 }}
      />

      <EuiSpacer size="l" />

      <EuiFlexGroup
        responsive={status === "loaded"}
        alignItems="center"
        gutterSize="none"
      >
        <EuiFlexItem grow={true}>
          <EuiTitle size="m">
            <h1 style={{ lineHeight: "40px", height: 40 }}>{title}</h1>
          </EuiTitle>
        </EuiFlexItem>
        {status === "loaded" && (
          <EuiFlexItem grow={false}>
            <div>
              <PermissionButton
                initialIsModalVisible={false}
                isLoading={false}
                color="primary"
                hasPermission={canCreate}
                onClick={onCreate}
              >
                {create} {itemText}
              </PermissionButton>
            </div>
          </EuiFlexItem>
        )}
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {status === "loaded" && children}

      {status === "empty" && (
        <EuiEmptyPrompt
          color="primary"
          title={<h2>{noItemsText}</h2>}
          body={
            <p>
              {startCreating} {itemsText} {now.toLowerCase()}
            </p>
          }
          actions={
            <PermissionButton
              initialIsModalVisible={false}
              isLoading={false}
              color="primary"
              hasPermission={canCreate}
              onClick={onCreate}
            >
              {create} {firstItemText}
            </PermissionButton>
          }
          css={{ width: "100%", maxWidth: "100%" }}
        />
      )}

      {status === "loading" && <LoadingStatus />}

      {status === "error" && <ErrorStatus />}

      {status === "restrictedView" && <RestrictedViewStatus />}
    </EuiFlexItem>
  );
};
