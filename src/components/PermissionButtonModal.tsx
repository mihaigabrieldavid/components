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
  onClose: () => void;
};

export const PermissionButtonModal = ({
  onClose,
}: PermissionButtonModalProps) => {
  const title = useEuiI18n(
    "permissionButtonModal.title",
    "Acțiune restricționată"
  );
  const body = useEuiI18n(
    "permissionButtonModal.body",
    "Nu ai permisiunea necesară pentru a efectua această acțiune"
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
        <EuiText>{body}</EuiText>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButton fill={true} color="danger" onClick={onClose}>
          {close}
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
