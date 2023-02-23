import React, { useEffect, useRef } from "react";
import { Stack } from "native-base";
import Button from "../../../../components/atoms/Button";
import { Heading, Text } from "../../../../components/atoms/Typography";
import AuthLayout from "../../../../components/templates/AuthLayout";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../../../navigation/AuthNavigator/types";
import Input from "../../../../components/atoms/Input";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN_PASSWORD>;

const PasswordScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthLayout>
      <Stack space={10} pt={4}>
        <Stack space={8}>
          <Stack space={1}>
            <Heading size="xl">Enter your password</Heading>
            <Text styleType="secondary">
              Enter the password you signed up with to continue
            </Text>
          </Stack>
          <Input label="Password" autoFocus={true} />
        </Stack>
        <Stack space={1}>
          <Button onPress={() => navigation.navigate("SignInPassword")}>
            Sign in
          </Button>
          <Text textAlign="center">Forgot password?</Text>
        </Stack>
      </Stack>
    </AuthLayout>
  );
};

export default PasswordScreen;
