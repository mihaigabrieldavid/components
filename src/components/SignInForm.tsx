import {
  EuiButton,
  EuiCallOut,
  EuiFieldPassword,
  EuiFieldText,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
  EuiLink,
  useEuiI18n,
  EuiFlexGroup,
} from "@elastic/eui";
import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";

export type SignInFormProps = {
  status: "submitting" | "error" | "default";
  onForgotPassword: () => void;
  onSubmit: (
    values: {
      email: string;
      password: string;
    },
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => void | Promise<any>;
};

export const SignInForm = ({
  status,
  onForgotPassword,
  onSubmit,
}: SignInFormProps) => {
  const title = useEuiI18n("signInForm.title", "Intră în cont");
  const email = useEuiI18n("signInForm.email", "Email");
  const emailText = useEuiI18n(
    "signInForm.emailText",
    "Te rugăm să folosești un email valid"
  );
  const password = useEuiI18n("signInForm.password", "Parolă");
  const submit = useEuiI18n("signInForm.submit", "Conectează-te");
  const forgotPassword = useEuiI18n(
    "signInForm.forgotPassword",
    "Ai uitat parola?"
  );
  const error = useEuiI18n(
    "signInForm.error",
    "Adresa de email sau parola introdusă este incorectă. Te rugăm să încerci din nou."
  );
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().email(emailText).required(""),
      password: Yup.string().required(""),
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
      <EuiPanel hasBorder={true} style={{ maxWidth: 430, padding: 32 }}>
        <EuiTitle size="m">
          <h1 className="eui-textCenter">{title}</h1>
        </EuiTitle>
        <EuiSpacer size="xl" />
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
          <EuiFormRow label={password}>
            <EuiFieldPassword
              value={formik.values.password}
              onBlur={(e) => {
                formik.handleBlur("password")(e);
              }}
              onChange={(e) => {
                formik.handleChange("password")(e);
              }}
            />
          </EuiFormRow>
          <EuiSpacer size="l" />
          <EuiButton
            color={status === "error" ? "danger" : "primary"}
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
          <EuiLink onClick={onForgotPassword}>{forgotPassword}</EuiLink>
        </div>
        {status === "error" && (
          <>
            <EuiSpacer size="l" />
            <EuiCallOut
              color="danger"
              title={error}
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            />
          </>
        )}
      </EuiPanel>
    </EuiFlexGroup>
  );
};
