import {
  EuiButton,
  EuiEmptyPrompt,
  EuiFlexGroup,
  useEuiI18n,
} from "@elastic/eui";

export type UpgradeRequiredStatusProps = {
  onClick: () => void;
};

export const UpgradeRequiredStatus = ({
  onClick,
}: UpgradeRequiredStatusProps) => {
  const title = useEuiI18n(
    "upgradeRequiredStatus.title",
    "Fă upgrade abonamentului pentru a vedea conținutul"
  );
  const button = useEuiI18n("upgradeRequiredStatus.button", "Upgrade");

  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiEmptyPrompt
        color="primary"
        title={<h2>{title}</h2>}
        actions={
          <EuiButton color="primary" fill onClick={onClick}>
            {button}
          </EuiButton>
        }
        style={{ width: "100%", maxWidth: "100%" }}
      />
    </EuiFlexGroup>
  );
};
