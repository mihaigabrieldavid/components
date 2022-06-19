import { EuiEmptyPrompt, EuiFlexGroup, useEuiI18n } from "@elastic/eui";

export const NotFoundStatus = () => {
  const title = useEuiI18n("notFoundStatus.title", "Pagina nu a fost găsită");
  const body = useEuiI18n(
    "notFoundStatus.body",
    "Te rugăm să ne contactezi dacă consideri că este o greșeală"
  );

  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiEmptyPrompt
        iconType="alert"
        color="danger"
        title={<h2>{title}</h2>}
        body={<p>{body}</p>}
        style={{ width: "100%", maxWidth: "100%" }}
      />
    </EuiFlexGroup>
  );
};
