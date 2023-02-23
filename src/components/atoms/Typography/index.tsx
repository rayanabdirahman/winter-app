import React from "react";
import {
  Text as NBText,
  ITextProps,
  Heading as NBHeading,
  IHeadingProps,
} from "native-base";
import colors from "../../../lib/theme/colors";

type HeadingProps = IHeadingProps & {
  styleType?: "primary" | "secondary";
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  styleType = "primary",
  ...props
}) => {
  const color =
    styleType === "primary" ? colors.neutral.black900 : colors.neutral.gray500;
  return (
    <NBHeading {...props} color={color}>
      {children}
    </NBHeading>
  );
};

type TextProps = ITextProps & {
  styleType?: "primary" | "secondary";
};

export const Text: React.FC<TextProps> = ({
  children,
  styleType = "primary",
  ...props
}) => {
  const color =
    styleType === "primary" ? colors.neutral.black900 : colors.neutral.gray500;
  return (
    <NBText {...props} color={color} fontSize="md">
      {children}
    </NBText>
  );
};
