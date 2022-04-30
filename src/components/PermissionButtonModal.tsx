import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiText,
  useEuiI18n,
} from "@elastic/eui";

export type PermissionButtonModalProps = {
  isUpgradeRequired: boolean;
  onClose: () => void;
};

export const PermissionButtonModal = ({
  isUpgradeRequired,
  onClose,
}: PermissionButtonModalProps) => {
  const title = useEuiI18n(
    "permissionButtonModal.title",
    "Acțiune restricționată"
  );
  const permissionMessage = useEuiI18n(
    "permissionButtonModal.permissionMessage",
    "Nu ai primit permisiunea necesară pentru a efectua această acțiune"
  );
  const upgradeMessage = useEuiI18n(
    "permissionButtonModal.upgradeMessage",
    "Fă upgrade abonamentului pentru a efectua această acțiune"
  );
  const close = useEuiI18n("permissionButtonModal.close", "Închide");

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <h1>{title}</h1>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiText>
          {isUpgradeRequired ? upgradeMessage : permissionMessage}
        </EuiText>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButton fill={true} color="danger" onClick={onClose}>
          {close}
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
