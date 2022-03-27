import {
  EuiFlexGroup,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { LoadingStatus } from "./LoadingStatus";

export type AccountSecurityVerificationProps = {
  status: "success" | "loading" | "error";
};

export const AccountSecurityVerification = ({
  status,
}: AccountSecurityVerificationProps) => {
  const successTitle = useEuiI18n(
    "accountSecurityVerification.successTitle",
    "Contul tău a fost verificat"
  );
  const errorTitle = useEuiI18n(
    "accountSecurityVerification.errorTitle",
    "Eroare verificare cont"
  );
  const successBody = useEuiI18n(
    "accountSecurityVerification.successBody",
    "Mulțumim pentru finalizarea verificării de securitate"
  );
  const errorBody = useEuiI18n(
    "accountSecurityVerification.errorBody",
    "Linkul este invalid sau a expirat"
  );

  if (status === "loading") {
    return <LoadingStatus />;
  }

  return (
    <EuiFlexGroup
      gutterSize="none"
      alignItems="center"
      justifyContent="center"
      responsive={false}
    >
      <EuiPanel hasBorder={true} css={{ maxWidth: 430, padding: 32 }}>
        <EuiTitle size="m">
          <h1 className="eui-textCenter">
            {status === "success" && successTitle}
            {status === "error" && errorTitle}
          </h1>
        </EuiTitle>
        <EuiSpacer size="xl" />
        <EuiText size="m" color="subdued" className="eui-textCenter">
          {status === "success" && successBody}
          {status === "error" && errorBody}
        </EuiText>
      </EuiPanel>
    </EuiFlexGroup>
  );
};
