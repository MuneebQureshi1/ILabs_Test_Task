import { Input } from "@rneui/themed";
import React from "react";
import { Theme } from "../../constants/Theme";
import { globalStyle } from "../../globalStyles/globalStyles";

interface CustomInputProps {
  placeholder: string;
  placeholderTextColor: string;
  onChangeText?: (text: string) => void; // Optional callback for handling input changes
  value?: string; // Optional value to control the input's value
  style?: object; // Custom style for additional flexibility
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  placeholderTextColor = Theme.bottomBarInactiveText,
  onChangeText,
  value,
  style,
  ...props
}) => {
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      inputContainerStyle={[globalStyle.defaultInputStyle, style]}
      inputStyle={globalStyle.inputDefaultTextStyle}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default CustomInput;
