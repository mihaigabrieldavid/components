import {
  EuiButton,
  useEuiI18n,
  EuiModal,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiText,
} from "@elastic/eui";

export type EmailSentModalProps = {
  isVisible: boolean;
  email: string;
  onResend: () => void;
  onClose: () => void;
};

export const EmailSentModal = ({
  isVisible,
  email,
  onResend,
  onClose,
}: EmailSentModalProps) => {
  const title = useEuiI18n("emailSentModal.title", "Verifică-ți email-ul");
  const body = useEuiI18n(
    "emailSentModal.body",
    "Am trimis un email de verificare la adresa"
  );
  const text = useEuiI18n(
    "emailSentModal.text",
    "Nu găsești email-ul? Nici în folderul spam? Folosește butonul de mai jos pentru a primi un alt email"
  );
  const resend = useEuiI18n("emailSentModal.resend", "Retrimite email");
  const back = useEuiI18n("emailSentModal.close", "Închide");

  if (!isVisible) {
    return null;
  }

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>{title}</EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiText>
          <p>
            {body} <strong>{email}</strong>.
          </p>
          <p>{text}.</p>
        </EuiText>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButtonEmpty css={{ marginRight: 8 }} onClick={onClose}>
          {back}
        </EuiButtonEmpty>
        <EuiButton color="primary" fill={true} onClick={onResend}>
          {resend}
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
