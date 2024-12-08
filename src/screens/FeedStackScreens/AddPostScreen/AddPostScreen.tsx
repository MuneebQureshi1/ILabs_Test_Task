import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { Theme } from "../../../constants/Theme";
import {
  horizontalResponsive,
  verticalResponsive,
} from "../../../utils/responsiveControlFunctions";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { TextList } from "../../../constants/TextList";
import { globalStyle } from "../../../globalStyles/globalStyles";
import CustomTextArea from "../../../components/CustomTextArea/CustomtextArea";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../constants/svg";

const AddPostScreen = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <ScreenContainer HeaderLabel="Add New Post">
      <CustomInput
        placeholder="Post Title"
        placeholderTextColor={Theme.tableCellDescription}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }} //@ts-ignore
        leftIcon={<SvgXml xml={svg.postTitle} />}
        style={{
          height: verticalResponsive(50),
          borderRadius: horizontalResponsive(20),
        }}
      />

      <CustomTextArea
        placeholder="Description"
        leftIcon={<SvgXml xml={svg.descriptionIcon} height={20} width={20} />}
      />
      <CustomButton
        text={TextList.Add_Post}
        onPress={() => {
          // navigation.navigate("AddPost");
        }}
      />
    </ScreenContainer>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({});
