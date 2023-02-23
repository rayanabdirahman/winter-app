import { Button as NBButton, IButtonProps } from "native-base";
import React from "react";
import colors from "../../../lib/theme/colors";

type Props = IButtonProps & {
  styleType?: "primary" | "secondary";
};

const Button: React.FC<Props> = ({
  children,
  styleType = "primary",
  ...props
}) => {
  const bgColor =
    styleType === "primary" ? colors.neutral.black800 : colors.brand.brand500;
  return (
    <NBButton
      {...props}
      style={{ backgroundColor: bgColor }}
      size="lg"
      borderRadius="lg"
    >
      {children}
    </NBButton>
  );
};

export default Button;
