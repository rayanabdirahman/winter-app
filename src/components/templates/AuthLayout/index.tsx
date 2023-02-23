import React from "react";
import { View } from "react-native";
import colors from "../../../lib/theme/colors";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => (
  <View
    style={{
      backgroundColor: colors.shades.white,
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    }}
  >
    {children}
  </View>
);

export default AuthLayout;
