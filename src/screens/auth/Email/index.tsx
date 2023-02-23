import React from "react";
import { Stack } from "native-base";
import Button from "../../../components/atoms/Button";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../navigation/AuthNavigator/types";
import { Heading, Text } from "../../../components/atoms/Typography";
import Input from "../../../components/atoms/Input";

type Props = AuthScreenProps<AuthStackScreenNames.EMAIL>;

const EmailScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthLayout>
      <Stack space={10} pt={4}>
        <Stack space={8}>
          <Stack space={1}>
            <Heading size="xl">Enter your email</Heading>
            <Text styleType="secondary">
              Get started by entering your email address
            </Text>
          </Stack>
          <Input label="Email" autoFocus={true} />
        </Stack>
        <Button onPress={() => navigation.navigate("SignInPassword")}>
          Continue
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default EmailScreen;
