import React from "react";
import {
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { horizontalResponsive } from "../../utils/responsiveControlFunctions";
import { CustomText } from "../CustomText/CustomText";
import { globalStyle } from "../../globalStyles/globalStyles";
import Loader from "../Loader/Loader";
import { Theme } from "../../constants/Theme";

// Define types for props
type CustomButtonProps = {
  onPress: () => void;
  text: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean; // New prop for loading state
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  iconName,
  iconSize = horizontalResponsive(24),
  iconColor = "white",
  buttonStyle,
  textStyle,
  loading = false, // Default is not loading
  disabled = false,
}) => {
  return (
    <View style={globalStyle.buttonContainer}>
      <TouchableOpacity
        style={[
          globalStyle.button,
          {
            backgroundColor:
              disabled || loading
                ? Theme.tableCellDescription
                : Theme.bottomBarActiveText,
          },
          ,
          buttonStyle,
        ]}
        activeOpacity={0.7}
        onPress={loading ? undefined : onPress} // Disable onPress if loading
        disabled={loading || disabled} // Disable button when loading
      >
        {loading ? (
          <Loader color={Theme.white} size={"small"} />
        ) : (
          <>
            {iconName && ( //@ts-ignore
              <AntDesign name={iconName} color={iconColor} size={iconSize} />
            )}
            <CustomText style={[globalStyle.buttonText, textStyle]}>
              {text}
            </CustomText>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
