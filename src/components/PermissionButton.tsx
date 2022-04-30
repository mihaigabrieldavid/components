import { EuiButton } from "@elastic/eui";
import { ReactNode, useState } from "react";
import { PermissionButtonModal } from "./PermissionButtonModal";

export type PermissionButtonProps = {
  initialIsModalVisible: boolean;
  hasPermission: boolean;
  isUpgradeRequired: boolean;
  children: ReactNode;
  isLoading: boolean;
  color:
    | "success"
    | "danger"
    | "warning"
    | "text"
    | "primary"
    | "accent"
    | "ghost";
  onClick: () => void;
};

export const PermissionButton = ({
  initialIsModalVisible,
  hasPermission,
  isUpgradeRequired,
  children,
  color,
  isLoading,
  onClick,
}: PermissionButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(initialIsModalVisible);

  const handleClick = () => {
    if (hasPermission) {
      onClick();
    } else {
      setIsModalVisible(true);
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <EuiButton
        color={color}
        isLoading={isLoading}
        fill={true}
        onClick={handleClick}
      >
        {children}
      </EuiButton>
      {isModalVisible && (
        <PermissionButtonModal
          isUpgradeRequired={isUpgradeRequired}
          onClose={handleClose}
        />
      )}
    </>
  );
};
