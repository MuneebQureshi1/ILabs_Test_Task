import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Theme } from "../../constants/Theme";
import { globalStyle } from "../../globalStyles/globalStyles";
import { CustomText } from "../CustomText/CustomText";

interface CustomTextAreaProps extends TextInputProps {
  placeholder: string;
  errorMessage: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  leftIcon?: JSX.Element; // JSX element for the left icon
  rightIcon?: JSX.Element; // JSX element for the right icon
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder,
  placeholderTextColor = Theme.tableCellDescription,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  style,
  errorMessage,
  ...props
}) => {
  return (
    <>
      <View style={[globalStyle.CustomTextAreacontainer, style]}>
        {leftIcon && (
          <View style={globalStyle.CustomTextAreaiconLeft}>{leftIcon}</View>
        )}
        <TextInput
          style={[
            globalStyle.defaultInputStyle,
            globalStyle.inputDefaultTextStyle,
            globalStyle.textArea,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          multiline
          {...props}
        />
        {rightIcon && (
          <View style={globalStyle.CustomTextAreaiconRight}>{rightIcon}</View>
        )}
      </View>
      {errorMessage && (
        <CustomText style={[globalStyle.errorText, globalStyle.mL30]}>
          {errorMessage}
        </CustomText>
      )}
    </>
  );
};

export default CustomTextArea;
