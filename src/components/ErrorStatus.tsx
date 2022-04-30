import { EuiEmptyPrompt, EuiFlexGroup, useEuiI18n } from "@elastic/eui";

export const ErrorStatus = () => {
  const title = useEuiI18n("errorStatus.title", "A apărut o eroare");
  const body = useEuiI18n(
    "errorStatus.body",
    "Lucrăm să o rezolvăm în cel mai scurt timp. Te rugăm să încerci mai târziu."
  );

  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiEmptyPrompt
        iconType="alert"
        color="danger"
        title={<h2>{title}</h2>}
        body={<p>{body}</p>}
        css={{ width: "100%", maxWidth: "100%" }}
      />
    </EuiFlexGroup>
  );
};
