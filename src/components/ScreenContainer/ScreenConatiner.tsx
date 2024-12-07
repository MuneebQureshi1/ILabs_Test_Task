import { View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { Theme } from "../../constants/Theme";
import { globalStyle } from "../../globalStyles/globalStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loader from "../Loader/Loader";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { svg } from "../../constants/svg";
import { CustomText } from "../CustomText/CustomText";
import {
  horizontalResponsive,
  verticalResponsive,
} from "../../utils/responsiveControlFunctions";

interface ScreenContainerProps {
  children: ReactNode;
  style?: ViewStyle | any;
  loading?: boolean;
  backgroundColor?: string;
  HeaderLabel?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  loading,
  backgroundColor = Theme.mainBackgroundColor,
  HeaderLabel,
}) => {
  return (
    <SafeAreaView
      style={[
        globalStyle.Flex1,
        !loading && style,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <KeyboardAwareScrollView
        style={globalStyle.Flex1}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={!loading && style}
        contentInsetAdjustmentBehavior="automatic"
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      >
        {/* Custom header */}
        <View style={globalStyle.headerStyle}>
          <View style={globalStyle.verticalAlignment}>
            <SvgXml xml={svg.hamBurger} />
          </View>
          <View style={[globalStyle.verticalAlignment]}>
            <CustomText style={globalStyle.headerTextStyle}>
              {HeaderLabel}
            </CustomText>
          </View>
          <View style={globalStyle.verticalAlignment}>
            <SvgXml xml={svg.activeSettingsIcon} />
          </View>
        </View>
        {loading ? (
          <View style={globalStyle.loaderContainer}>
            <Loader />
          </View>
        ) : (
          children
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
