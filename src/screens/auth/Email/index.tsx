import React from "react";
import { Button, Text } from "react-native";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../navigation/AuthNavigator/types";

type Props = AuthScreenProps<AuthStackScreenNames.EMAIL>;

const EmailScreen: React.FC<Props> = ({ navigation }) => (
  <AuthLayout>
    <Text>Email</Text>
    <Button
      title="Continue"
      onPress={() => navigation.navigate("SignInPassword")}
    />
  </AuthLayout>
);

export default EmailScreen;
