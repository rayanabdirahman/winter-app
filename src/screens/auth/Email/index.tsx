import React from "react";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../navigation/AuthNavigator/types";
import useEmail from "../../../lib/hooks/auth/useEmail";
import AuthEmailForm from "../../../components/molecules/AuthEmailForm";

type Props = AuthScreenProps<AuthStackScreenNames.EMAIL>;

const EmailScreen: React.FC<Props> = ({ navigation }) => {
  const { onAuthEmailSubmit } = useEmail();
  return (
    <AuthLayout
      headings="Enter your email"
      subHeadings="Get started by entering your email address"
    >
      <AuthEmailForm
        onSubmit={(values) =>
          onAuthEmailSubmit(values.email, () => navigation.navigate("SignIn"))
        }
      />
    </AuthLayout>
  );
};

export default EmailScreen;
