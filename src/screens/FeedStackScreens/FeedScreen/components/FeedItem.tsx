import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { CustomText } from "../../../../components/CustomText/CustomText";
import { FeedStyleSheet } from "../FeedStyleSheet";
import { svg } from "../../../../constants/svg";

// Props Types
interface FeedItemComponentProps {
  title: string;
  description: string;
  containerStyle?: ViewStyle; // Optional container style
}

const FeedItemComponent: React.FC<FeedItemComponentProps> = ({
  title,
  description,
  containerStyle,
}) => {
  return (
    <View style={[FeedStyleSheet.FeedItemcontainer, containerStyle]}>
      <View style={FeedStyleSheet.FeedItemtextContainer}>
        <CustomText style={FeedStyleSheet.FeedItemtitle}>{title}</CustomText>
        <CustomText style={FeedStyleSheet.FeedItemdescription}>
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </CustomText>
      </View>
      <View style={FeedStyleSheet.FeedItemiconContainer}>
        <SvgXml xml={svg.edit} />
      </View>
    </View>
  );
};

export default FeedItemComponent;
