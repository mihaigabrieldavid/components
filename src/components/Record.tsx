import {
  EuiBreadcrumb,
  EuiHeaderBreadcrumbs,
  EuiButton,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiSpacer,
  EuiTitle,
  useEuiI18n,
  EuiContextMenuItem,
} from "@elastic/eui";
import { ReactNode, useState } from "react";
import { capitalizeFirstLetter } from "../utils";
import { ErrorStatus } from "./ErrorStatus";
import { LoadingStatus } from "./LoadingStatus";
import { RestrictedViewStatus } from "./RestrictedViewStatus";
import { DeleteButton } from "./DeleteButton";
import { NotFoundStatus } from "./NotFoundStatus";
import { PermissionButton } from "./PermissionButton";
import { UpgradeRequiredStatus } from "./UpgradeRequiredStatus";

export type RecordAction = {
  id: string;
  name: string;
  onClick: () => void;
};

export type RecordProps = {
  initialIsPopoverOpen: boolean;
  itemText: string;
  canDelete: boolean;
  canUpdate: boolean;
  children: ReactNode;
  actions: RecordAction[];
  status:
    | "loading"
    | "error"
    | "restrictedView"
    | "notFound"
    | "loaded"
    | "upgradeRequired";
  isDeleting: boolean;
  isUpdating: boolean;
  showDeleteButton: boolean;
  breadcrumbs: EuiBreadcrumb[];
  onUpdate: () => void;
  onDelete: () => void;
  onUpgrade: () => void;
};

export const Record = ({
  itemText,
  children,
  canUpdate,
  canDelete,
  status,
  initialIsPopoverOpen,
  actions,
  isUpdating,
  isDeleting,
  showDeleteButton,
  breadcrumbs,
  onDelete,
  onUpdate,
  onUpgrade,
}: RecordProps) => {
  const actionsText = useEuiI18n("record.actions", "Acțiuni");
  const update = useEuiI18n("record.update", "Actualizează");
  const del = useEuiI18n("record.delete", "Șterge");
  const title = capitalizeFirstLetter(itemText);
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
        responsive={status === "loaded" && actions.length > 0}
        gutterSize="none"
        alignItems="center"
      >
        <EuiFlexItem grow={true}>
          <EuiTitle size="m">
            <h1 style={{ lineHeight: "40px", height: 40 }}>{title}</h1>
          </EuiTitle>
        </EuiFlexItem>

        {status === "loaded" && actions.length > 0 && (
          <EuiFlexItem grow={false}>
            {actions.length > 1 && (
              <EuiPopover
                ownFocus={false}
                button={
                  <EuiButton
                    fill={true}
                    iconType="arrowDown"
                    iconSide="right"
                    onClick={handlePopoverToggle}
                  >
                    {actionsText}
                  </EuiButton>
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
            {actions.length === 1 &&
              actions.map(({ id, name, onClick }) => (
                <div key={id}>
                  <EuiButton
                    fill={true}
                    onClick={() => {
                      onClick();
                    }}
                  >
                    {name}
                  </EuiButton>
                </div>
              ))}
          </EuiFlexItem>
        )}
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {status === "loaded" && (
        <>
          {children}
          <EuiSpacer size="l" />
          <EuiFlexGroup responsive={false}>
            <EuiFlexItem grow={false}>
              <PermissionButton
                initialIsModalVisible={false}
                color="primary"
                hasPermission={canUpdate}
                isUpgradeRequired={false}
                isLoading={isUpdating}
                onClick={onUpdate}
              >
                {update}
              </PermissionButton>
            </EuiFlexItem>
            {showDeleteButton && (
              <EuiFlexItem grow={false}>
                <DeleteButton
                  initialIsModalVisible={false}
                  hasPermission={canDelete}
                  isLoading={isDeleting}
                  onClick={onDelete}
                >
                  {del}
                </DeleteButton>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </>
      )}

      {status === "loading" && <LoadingStatus />}

      {status === "error" && <ErrorStatus />}

      {status === "restrictedView" && <RestrictedViewStatus />}

      {status === "notFound" && <NotFoundStatus />}

      {status === "upgradeRequired" && (
        <UpgradeRequiredStatus onClick={onUpgrade} />
      )}
    </EuiFlexItem>
  );
};
