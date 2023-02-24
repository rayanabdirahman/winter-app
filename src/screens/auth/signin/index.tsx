import React from "react";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../navigation/AuthNavigator/types";

import SignInForm from "../../../components/molecules/SignInForm";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN>;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthLayout
      headings="Enter your password"
      subHeadings="Enter the password you signed up with to continue"
    >
      <SignInForm onSubmit={(values) => console.log("Signed in: ", values)} />
    </AuthLayout>
  );
};

export default SignInScreen;
