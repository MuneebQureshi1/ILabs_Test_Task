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
        // leftIcon={
        //   //@ts-ignore
        //   <SimpleLineIcons
        //     name="magnifier"
        //     size={20}
        //     color={Theme.bottomBarInactiveText}
        //   />
        // }
        style={{
          height: verticalResponsive(50),
          borderRadius: horizontalResponsive(20),
        }}
      />
      {/* <CustomInput
        placeholder="Post Title"
        placeholderTextColor={Theme.tableCellDescription}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }} //@ts-ignore
        // leftIcon={
        //   //@ts-ignore
        //   <SimpleLineIcons
        //     name="magnifier"
        //     size={20}
        //     color={Theme.bottomBarInactiveText}
        //   />
        // }
        multiline
        style={{
          height: verticalResponsive(200),
          borderRadius: horizontalResponsive(20),
          textAlignVertical: "top", // Align text vertically to the top
          textAlign: "left",
        }}
      /> */}

      <TextInput
        style={[
          globalStyle.defaultInputStyle,
          globalStyle.inputDefaultTextStyle,
          {
            height: verticalResponsive(200),
            borderRadius: horizontalResponsive(20),
            textAlignVertical: "top", // Align text vertically to the top
            textAlign: "left",
          },
        ]}
        placeholder="Post Title"
        placeholderTextColor={Theme.tableCellDescription}
        multiline
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
