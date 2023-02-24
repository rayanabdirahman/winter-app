import React from "react";
import { Stack } from "native-base";
import { View } from "react-native";
import colors from "../../../lib/theme/colors";
import { Heading, Text } from "../../atoms/Typography";

type Props = {
  headings: string;
  subHeadings?: string;
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ headings, subHeadings, children }) => (
  <View
    style={{
      backgroundColor: colors.shades.white,
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    }}
  >
    <Stack space={10} pt={4}>
      <Stack space={1}>
        <Heading size="xl">{headings}</Heading>
        <Text styleType="secondary">{subHeadings}</Text>
      </Stack>

      {children}
    </Stack>
  </View>
);

export default AuthLayout;
