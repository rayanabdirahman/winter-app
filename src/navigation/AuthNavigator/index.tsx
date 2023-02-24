import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList, AuthStackScreenNames } from "./types";
import EmailScreen from "../../screens/auth/Email";
import SignInScreen from "../../screens/auth/SignIn";
import CreatePasswordScreen from "../../screens/auth/signup/CreatePassword";
import NameScreen from "../../screens/auth/signup/Name";
import UsernameScreen from "../../screens/auth/signup/Username";
import colors from "../../lib/theme/colors";

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={AuthStackScreenNames.EMAIL}
      screenOptions={{
        headerTitle: "",
        headerTintColor: colors.neutral.black900,
        headerLeftContainerStyle: { paddingLeft: 20 },
        headerBackTitle: " ",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name={AuthStackScreenNames.EMAIL} component={EmailScreen} />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_IN}
        component={SignInScreen}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP_CONFIRM_EMAIL}
        component={EmailScreen}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP_PASSWORD}
        component={CreatePasswordScreen}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP_NAME}
        component={NameScreen}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP_USERNAME}
        component={UsernameScreen}
      />
    </Stack.Navigator>
  );
}
