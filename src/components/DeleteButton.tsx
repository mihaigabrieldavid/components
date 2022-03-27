import { ReactNode, useState } from "react";
import { DeleteButtonModal } from "./DeleteButtonModal";
import { PermissionButton } from "./PermissionButton";

export type DeleteButtonProps = {
  initialIsModalVisible: boolean;
  hasPermission: boolean;
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

export const DeleteButton = ({
  initialIsModalVisible,
  hasPermission,
  children,
  isLoading,
  onClick,
}: DeleteButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(initialIsModalVisible);

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    onClick();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <PermissionButton
        initialIsModalVisible={false}
        hasPermission={hasPermission}
        color="danger"
        isLoading={isLoading}
        onClick={handleClick}
      >
        {children}
      </PermissionButton>
      {isModalVisible && (
        <DeleteButtonModal onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </>
  );
};
