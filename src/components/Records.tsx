import {
  EuiBreadcrumb,
  EuiButtonIcon,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiPopover,
  EuiSpacer,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { ReactNode, useState } from "react";
import { capitalizeFirstLetter } from "../utils";
import { ErrorStatus } from "./ErrorStatus";
import { LoadingStatus } from "./LoadingStatus";
import { PermissionButton } from "./PermissionButton";
import { RestrictedViewStatus } from "./RestrictedViewStatus";
import { UpgradeRequiredStatus } from "./UpgradeRequiredStatus";

export type RecordsAction = {
  id: string;
  name: string;
  onClick: () => void;
};

export type RecordsProps = {
  itemText: string;
  itemsText: string;
  noItemsText: string;
  firstItemText: string;
  canCreate: boolean;
  breadcrumbs: EuiBreadcrumb[];
  children: ReactNode;
  status:
    | "loading"
    | "error"
    | "restrictedView"
    | "empty"
    | "loaded"
    | "upgradeRequired";
  actions: RecordsAction[];
  initialIsPopoverOpen: boolean;
  onCreate: () => void;
  onUpgrade: () => void;
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
  actions,
  initialIsPopoverOpen,
  onCreate,
  onUpgrade,
}: RecordsProps) => {
  const create = useEuiI18n("records.create", "Creează");
  const startCreating = useEuiI18n("records.startCreating", "Începe să creezi");
  const now = useEuiI18n("records.now", "Acum");
  const title = capitalizeFirstLetter(itemsText);
  const [isPopoverOpen, setIsPopoverOpen] = useState(initialIsPopoverOpen);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handlePopoverToggle = () => {
    if (isPopoverOpen) {
      handlePopoverClose();
    } else {
      handlePopoverOpen();
    }
  };

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
          <EuiFlexGroup
            gutterSize="none"
            responsive={false}
            alignItems="center"
          >
            <EuiTitle size="m">
              <h1 style={{ lineHeight: "40px", marginRight: 12 }}>{title}</h1>
            </EuiTitle>
            {status === "loaded" && actions.length > 0 && (
              <EuiPopover
                ownFocus={false}
                button={
                  <EuiButtonIcon
                    iconType="boxesVertical"
                    onClick={handlePopoverToggle}
                  />
                }
                isOpen={isPopoverOpen}
                closePopover={handlePopoverClose}
                panelPaddingSize="none"
                anchorPosition="downCenter"
              >
                <EuiContextMenuPanel
                  size="s"
                  items={actions.map(({ id, name, onClick }) => (
                    <EuiContextMenuItem
                      key={id}
                      onClick={() => {
                        onClick();
                      }}
                    >
                      {name}
                    </EuiContextMenuItem>
                  ))}
                />
              </EuiPopover>
            )}
          </EuiFlexGroup>
        </EuiFlexItem>

        {status === "loaded" && (
          <EuiFlexItem grow={false}>
            <div>
              <PermissionButton
                initialIsModalVisible={false}
                isLoading={false}
                color="primary"
                hasPermission={canCreate}
                isUpgradeRequired={false}
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
              isUpgradeRequired={false}
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

      {status === "upgradeRequired" && (
        <UpgradeRequiredStatus onClick={onUpgrade} />
      )}
    </EuiFlexItem>
  );
};
