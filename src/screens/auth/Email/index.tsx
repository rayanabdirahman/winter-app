import React from "react";
import { Text } from "react-native";
import Button from "../../../components/atoms/Button";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../navigation/AuthNavigator/types";

type Props = AuthScreenProps<AuthStackScreenNames.EMAIL>;

const EmailScreen: React.FC<Props> = ({ navigation }) => (
  <AuthLayout>
    <Text>Email</Text>
    <Button onPress={() => navigation.navigate("SignInPassword")}>
      Continue
    </Button>
  </AuthLayout>
);

export default EmailScreen;
