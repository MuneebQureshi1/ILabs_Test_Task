import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";
import { Input } from "@rneui/base";
import {
  horizontalResponsive,
  verticalResponsive,
} from "../../../utils/responsiveControlFunctions";
import { Theme } from "../../../constants/Theme";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../constants/svg";
import CustomInput from "../../../components/CustomInput/CustomInput";
const FeedScreen = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <ScreenContainer HeaderLabel={TextList.feed}>
      <CustomInput
        placeholder="Search Posts"
        placeholderTextColor={Theme.SearchInputPlaceHolderColor}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }} //@ts-ignore
        leftIcon={
          //@ts-ignore
          <SimpleLineIcons name="magnifier" size={20} color="gray" />
        }
        rightIcon={
          <TouchableOpacity
            onPress={() => {
              setSearch("");
            }}
          >
            <SvgXml xml={svg.cross} />
          </TouchableOpacity>
        }
      />
    </ScreenContainer>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
