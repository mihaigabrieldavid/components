import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
} from "@elastic/eui";

export const LoadingStatus = () => {
  return (
    <EuiFlexGroup gutterSize="none" responsive={false} direction="column">
      <EuiFlexItem grow={false}>
        <EuiEmptyPrompt
          icon={
            <div style={{ margin: "16px auto 0 auto" }}>
              <EuiLoadingSpinner size="xl" />
            </div>
          }
          css={{ width: "100%", maxWidth: "100%" }}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
