import React from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Stack } from "native-base";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

type Props = {
  onSubmit: (values: { password: string }, actions: FormikHelpers<any>) => void;
};

const SignInForm: React.FC<Props> = ({ onSubmit }) => (
  <Formik
    initialValues={{ password: "" }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {(formik) => (
      <Stack space={8}>
        <Input
          autoFocus={true}
          label="Password"
          placeholder='e.g. "John$33*68"'
          isInvalid={!!formik.errors.password}
          errorMessage={formik.errors.password as string}
          onChangeText={formik.handleChange("password")}
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

export default SignInForm;
