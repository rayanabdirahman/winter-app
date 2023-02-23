import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Email: undefined;
  SignInPassword: undefined;
  SignUpConfirmEmail: undefined;
  SignUpPassword: undefined;
  SignUpName: undefined;
  SignUpUsername: undefined;
};

export enum AuthStackScreenNames {
  EMAIL = "Email",
  SIGN_IN_PASSWORD = "SignInPassword",
  SIGN_UP_CONFIRM_EMAIL = "SignUpConfirmEmail",
  SIGN_UP_PASSWORD = "SignUpPassword",
  SIGN_UP_NAME = "SignUpName",
  SIGN_UP_USERNAME = "SignUpUsername",
}

export type AuthScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;
