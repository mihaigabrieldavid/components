import { EuiConfirmModal, useEuiI18n } from "@elastic/eui";

export type DeleteButtonModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export const DeleteButtonModal = ({
  onCancel,
  onConfirm,
}: DeleteButtonModalProps) => {
  const title = useEuiI18n("deleteButtonModal.title", "Te rugăm să confirmi");
  const body = useEuiI18n(
    "deleteButtonModal.body",
    "Această acțiune este ireversibilă. Dorești să continui?"
  );
  const confirm = useEuiI18n("deleteButtonModal.confirm", "Da, continui");
  const cancel = useEuiI18n("deleteButtonModal.cancel", "Nu, renunț");

  return (
    <EuiConfirmModal
      title={title}
      onCancel={onCancel}
      onConfirm={onConfirm}
      cancelButtonText={cancel}
      confirmButtonText={confirm}
      buttonColor="danger"
    >
      {body}
    </EuiConfirmModal>
  );
};
