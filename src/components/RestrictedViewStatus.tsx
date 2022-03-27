import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  useEuiI18n,
} from "@elastic/eui";

export const RestrictedViewStatus = () => {
  const title = useEuiI18n(
    "restrictedViewStatus.title",
    "Vizualizare restricționată"
  );
  const body = useEuiI18n(
    "restrictedViewStatus.body",
    "Nu ai permisiunea necesară pentru a vizualiza conținutul"
  );

  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiFlexItem grow={false}>
        <EuiEmptyPrompt
          iconType="alert"
          color="danger"
          title={<h2>{title}</h2>}
          body={<p>{body}</p>}
          css={{ width: "100%", maxWidth: "100%" }}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
