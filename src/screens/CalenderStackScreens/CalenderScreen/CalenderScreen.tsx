import { View, Image } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";
import { globalStyle } from "../../../globalStyles/globalStyles";
const CalenderScreen = () => {
  return (
    <ScreenContainer HeaderLabel={TextList.Calender} style={globalStyle.Flex1}>
      <View style={[globalStyle.verticalAlignment, globalStyle.Flex1]}>
        <Image
          source={require("../../../../assets/ComingSoon.png")}
          style={globalStyle.comingsoonImage}
        />
      </View>
    </ScreenContainer>
  );
};

export default CalenderScreen;
