import {
  EuiButton,
  EuiCallOut,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFormRow,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";

export type SignUpFormProps = {
  status: "submitting" | "error" | "default";
  userEmail: string;
  onAgreement: () => void;
  onSubmit: (
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

export const SignUpForm = ({
  userEmail,
  status,
  onAgreement,
  onSubmit,
}: SignUpFormProps) => {
  const title = useEuiI18n("signUpForm.title", "Creează un cont");
  const name = useEuiI18n("signUpForm.name", "Nume");
  const email = useEuiI18n("signUpForm.email", "Email");
  const emailText = useEuiI18n(
    "signUpForm.emailText",
    "Te rugăm să folosești un email valid"
  );
  const password = useEuiI18n("signUpForm.password", "Parolă");
  const passwordText = useEuiI18n(
    "signUpForm.passwordText",
    "Parola trebuie să aibă minim 8 caractere"
  );
  const phone = useEuiI18n("signUpForm.phone", "Telefon");
  const phoneText = useEuiI18n(
    "signUpForm.phoneText",
    "Te rugăm să folosești un telefon valid"
  );
  const submit = useEuiI18n("signUpForm.submit", "Înregistrează-te");
  const error = useEuiI18n(
    "signUpForm.error",
    "Adresa de email este deja asociată unui cont. Te rugăm să încerci din nou."
  );
  const agreement = useEuiI18n(
    "signUpForm.agreement",
    "termenii și condițiile"
  );
  const agreementText = useEuiI18n(
    "signUpForm.agreementText",
    "Prin crearea unui cont confirmi că ai citit și ești de acord cu"
  );
  const formik = useFormik({
    initialValues: { name: "", email: userEmail, password: "", phone: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(""),
      email: Yup.string().email(emailText).required(""),
      password: Yup.string().min(8, passwordText).required(""),
      phone: Yup.string().min(7, phoneText).required(""),
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
            label={name}
            error={formik.errors.name}
            isInvalid={!!formik.errors.name && !!formik.touched.name}
          >
            <EuiFieldText
              icon="user"
              value={formik.values.name}
              onBlur={(e) => {
                formik.handleBlur("name")(e);
              }}
              onChange={(e) => {
                formik.handleChange("name")(e);
              }}
            />
          </EuiFormRow>
          <EuiFormRow
            label={email}
            error={formik.errors.email}
            isInvalid={!!formik.errors.email && !!formik.touched.email}
          >
            <EuiFieldText
              icon="email"
              readOnly={!!userEmail}
              value={userEmail || formik.values.email}
              onBlur={(e) => {
                formik.handleBlur("email")(e);
              }}
              onChange={(e) => {
                formik.handleChange("email")(e);
              }}
            />
          </EuiFormRow>
          <EuiFormRow
            label={password}
            error={formik.errors.password}
            isInvalid={!!formik.errors.password && !!formik.touched.password}
          >
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
          <EuiFormRow
            label={phone}
            error={formik.errors.phone}
            isInvalid={!!formik.errors.phone && !!formik.touched.phone}
          >
            <EuiFieldText
              icon="mobile"
              value={formik.values.phone}
              onBlur={(e) => {
                formik.handleBlur("phone")(e);
              }}
              onChange={(e) => {
                formik.handleChange("phone")(e);
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
        {status === "error" && (
          <>
            <EuiCallOut
              color="danger"
              title={error}
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            />
            <EuiSpacer size="l" />
          </>
        )}
        <EuiText size="s" color="subdued" className="eui-textCenter">
          {agreementText} <EuiLink onClick={onAgreement}>{agreement}</EuiLink>
        </EuiText>
      </EuiPanel>
    </EuiFlexGroup>
  );
};
