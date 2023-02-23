import React from "react";
import { Input as NBInput, IInputProps, FormControl } from "native-base";
import colors from "../../../lib/theme/colors";

type Props = IInputProps & {
  label?: string;
  isInvalid?: boolean;
  errorMessage?: string;
};

const Input: React.FC<Props> = ({
  label,
  errorMessage,
  isInvalid,
  ...props
}) => (
  <FormControl isInvalid={isInvalid}>
    <FormControl.Label>{label}</FormControl.Label>
    <NBInput
      {...props}
      size="xl"
      variant="underlined"
      focusOutlineColor={!isInvalid && colors.neutral.black800}
    />
    {isInvalid && (
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    )}
  </FormControl>
);
export default Input;
