import React from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Stack } from "native-base";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
});

type Props = {
  onSubmit: (values: { email: string }, actions: FormikHelpers<any>) => void;
};

const AuthEmailForm: React.FC<Props> = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: "" }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {(formik) => (
      <Stack space={8}>
        <Input
          autoFocus={true}
          label="Email"
          placeholder='e.g. "example@example.com"'
          isInvalid={!!formik.errors.email}
          errorMessage={formik.errors.email as string}
          onChangeText={formik.handleChange("email")}
        />
        <Button
          isLoading={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}
        >
          Continue
        </Button>
      </Stack>
    )}
  </Formik>
);

export default AuthEmailForm;
