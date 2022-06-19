import { EuiEmptyPrompt, EuiFlexGroup, EuiLoadingSpinner } from "@elastic/eui";

export const LoadingStatus = () => {
  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiEmptyPrompt
        icon={
          <div style={{ margin: "16px auto 0 auto" }}>
            <EuiLoadingSpinner size="xl" />
          </div>
        }
        style={{ width: "100%", maxWidth: "100%" }}
      />
    </EuiFlexGroup>
  );
};
