import {
  EuiAvatar,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { FormikHelpers } from "formik";
import { LoadingStatus } from "./LoadingStatus";
import { SignUpForm } from "./SignUpForm";

export type InvitationToCollaborateProps = {
  userName: string;
  subtitle: string;
  message: string;
  email: string;
  body: string;
  status:
    | "loading"
    | "signUp"
    | "signingUp"
    | "signUpError"
    | "accept"
    | "accepting";
  onAccept: () => void;
  onDecline: () => void;
  onAgreement: () => void;
  onSignUp: (
    values: {
      name: string;
      email: string;
      password: string;
      phone: string;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      email: string;
      password: string;
      phone: string;
    }>
  ) => void | Promise<any>;
};

export const InvitationToCollaborate = ({
  email,
  userName,
  subtitle,
  message,
  status,
  body,
  onAccept,
  onDecline,
  onSignUp,
  onAgreement,
}: InvitationToCollaborateProps) => {
  const accept = useEuiI18n("invitationToCollaborate.accept", "Accept");
  const decline = useEuiI18n("invitationToCollaborate.decline", "Refuz");

  const getSignUpStatus = () => {
    if (status === "signUpError") {
      return "error";
    } else if (status === "signingUp") {
      return "submitting";
    }
    return "default";
  };

  if (status === "loading") {
    return <LoadingStatus />;
  }

  return (
    <EuiFlexGroup direction="column" gutterSize="none" alignItems="center">
      <EuiFlexGroup
        direction="column"
        gutterSize="none"
        responsive={false}
        style={{ maxWidth: 430 }}
        alignItems="center"
      >
        <EuiFlexItem style={{ marginBottom: 8 }}>
          <EuiAvatar
            size="xl"
            type="user"
            name={userName}
            style={{ userSelect: "none" }}
          />
        </EuiFlexItem>
        <EuiFlexItem className="eui-textCenter">
          <EuiTitle size="s">
            <h1 className="eui-textCenter">{userName}</h1>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem className="eui-textCenter">
          <EuiText size="s" color="subdued">
            {subtitle}
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem
          className="eui-textCenter"
          style={{ marginTop: 8, marginBottom: 16 }}
        >
          <EuiText size="m">{message}</EuiText>
        </EuiFlexItem>
        <EuiFlexGroup
          gutterSize="none"
          alignItems="center"
          justifyContent="center"
          responsive={false}
        >
          {(status === "signUp" ||
            status === "signingUp" ||
            status === "signUpError") && (
            <SignUpForm
              status={getSignUpStatus()}
              userEmail={email}
              onAgreement={onAgreement}
              onSubmit={onSignUp}
            />
          )}
          {(status === "accept" || status === "accepting") && (
            <EuiPanel hasBorder={true} style={{ padding: 32 }}>
              <EuiText size="m" className="eui-textCenter">
                {body}
              </EuiText>
              <EuiSpacer size="l" />
              <EuiFlexGroup gutterSize="s" responsive={false}>
                <EuiFlexItem>
                  <EuiButtonEmpty
                    style={{ marginRight: 8 }}
                    onClick={onDecline}
                  >
                    {decline}
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    color="primary"
                    fill={true}
                    isLoading={status === "accepting"}
                    onClick={onAccept}
                  >
                    {accept}
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          )}
        </EuiFlexGroup>
      </EuiFlexGroup>
    </EuiFlexGroup>
  );
};
