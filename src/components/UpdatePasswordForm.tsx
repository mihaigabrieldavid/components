import {
  EuiButton,
  EuiCallOut,
  EuiFieldPassword,
  EuiFlexGroup,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";

export type UpdatePasswordFormProps = {
  status: "submitting" | "error" | "default";
  onSubmit: (
    values: {
      password: string;
    },
    formikHelpers: FormikHelpers<{
      password: string;
    }>
  ) => void | Promise<any>;
};

export const UpdatePasswordForm = ({
  status,
  onSubmit,
}: UpdatePasswordFormProps) => {
  const title = useEuiI18n("updatePasswordForm.title", "Alege o nouă parolă");
  const password = useEuiI18n("updatePasswordForm.password", "Parolă");
  const passwordText = useEuiI18n(
    "updatePasswordForm.passwordText",
    "Parola trebuie să aibă minim 8 caractere"
  );
  const submit = useEuiI18n("updatePasswordForm.submit", "Actualizează parola");
  const error = useEuiI18n(
    "updatePasswordForm.error",
    "Linkul este invalid sau a expirat"
  );
  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: Yup.object().shape({
      password: Yup.string().min(8, passwordText).required(""),
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
        <form onSubmit={formik.handleSubmit}>
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
        {status === "error" && (
          <>
            <EuiSpacer size="l" />
            <EuiCallOut
              color="danger"
              title={error}
              css={{
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
