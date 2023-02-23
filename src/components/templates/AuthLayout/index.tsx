import React from "react";
import { View } from "react-native";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => (
  <View style={{ backgroundColor: "white", flex: 1 }}>{children}</View>
);

export default AuthLayout;
