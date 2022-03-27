import {
  EuiButton,
  EuiFieldText,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
  EuiLink,
  useEuiI18n,
  EuiText,
  EuiFlexGroup,
} from "@elastic/eui";
import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";

export type ResetPasswordFormProps = {
  status: "submitting" | "default";
  onBack: () => void;
  onSubmit: (
    values: {
      email: string;
    },
    formikHelpers: FormikHelpers<{
      email: string;
    }>
  ) => void | Promise<any>;
};

export const ResetPasswordForm = ({
  status,
  onBack,
  onSubmit,
}: ResetPasswordFormProps) => {
  const title = useEuiI18n("resetPasswordForm.title", "Ai uitat parola?");
  const body = useEuiI18n(
    "resetPasswordForm.body",
    "Spune-ne adresa de email a contului tău și îți vom trimite un email pentru resetarea parolei"
  );
  const email = useEuiI18n("resetPasswordForm.email", "Email");
  const emailText = useEuiI18n(
    "resetPasswordForm.emailText",
    "Te rugăm să folosești un email valid"
  );
  const submit = useEuiI18n("resetPasswordForm.submit", "Resetează parola");
  const back = useEuiI18n("resetPasswordForm.back", "Înapoi");
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().email(emailText).required(""),
    }),
    onSubmit,
  });

  return (
    <EuiFlexGroup
      gutterSize="none"
      alignItems="center"
      justifyContent="center"
      responsive={false}
    >
      <EuiPanel hasBorder={true} css={{ maxWidth: 430, padding: 32 }}>
        <EuiTitle size="m">
          <h1 className="eui-textCenter">{title}</h1>
        </EuiTitle>
        <EuiSpacer size="xl" />
        <EuiText color="subdued" className="eui-textCenter">
          {body}
        </EuiText>
        <EuiSpacer size="l" />
        <form onSubmit={formik.handleSubmit}>
          <EuiFormRow
            label={email}
            error={formik.errors.email}
            isInvalid={!!formik.errors.email && !!formik.touched.email}
          >
            <EuiFieldText
              icon="email"
              value={formik.values.email}
              onBlur={(e) => {
                formik.handleBlur("email")(e);
              }}
              onChange={(e) => {
                formik.handleChange("email")(e);
              }}
            />
          </EuiFormRow>
          <EuiSpacer size="l" />
          <EuiButton
            fill={true}
            fullWidth={true}
            isDisabled={!(formik.isValid && formik.dirty)}
            isLoading={status === "submitting"}
            type="submit"
          >
            {submit}
          </EuiButton>
        </form>
        <EuiSpacer size="l" />
        <div className="eui-textCenter">
          <EuiLink onClick={onBack}>{back}</EuiLink>
        </div>
      </EuiPanel>
    </EuiFlexGroup>
  );
};
