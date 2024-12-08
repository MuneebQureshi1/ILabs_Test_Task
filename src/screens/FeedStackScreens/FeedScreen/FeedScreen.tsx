import { FlatList, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";
import { Theme } from "../../../constants/Theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../constants/svg";
import CustomInput from "../../../components/CustomInput/CustomInput";
import FeedItemComponent from "./components/FeedItem";
import CustomButton from "../../../components/CustomButton/CustomButton";
const data = [
  { id: "1", title: "Buy groceries", description: "Milk, Bread, Eggs" },
  {
    id: "2",
    title: "Complete project",
    description: "Finalize the UI/UX design",
  },
  { id: "3", title: "Workout", description: "Yoga and strength training" },
  { id: "4", title: "Plan vacation", description: "Book flights and hotels" },
  { id: "5", title: "Read a book", description: "Finish the last chapter" },
  { id: "6", title: "Read a book", description: "Finish the last chapter" },
  { id: "7", title: "Read a book", description: "Finish the last chapter" },
  { id: "8", title: "Read a book", description: "Finish the last chapter" },
  { id: "9", title: "Read a book", description: "Finish the last chapter" },
  { id: "10", title: "Read a book", description: "Finish the last chapter" },
  { id: "11", title: "Read a book", description: "Finish the last chapter" },
  { id: "522", title: "Read a book", description: "Finish the last chapter" },
  { id: "533", title: "Read a book", description: "Finish the last chapter" },
  { id: "5344", title: "Read a book", description: "Finish the last chapter" },
];
const FeedScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const renderItem = ({
    item,
  }: {
    item: { id: string; title: string; description: string };
  }) => (
    <FeedItemComponent
      title={item.title}
      description={item.description}
      editOnPress={() => {
        navigation.navigate("AddPost", { editForm: true, previousData: item });
      }}
    />
  );
  return (
    <ScreenContainer
      HeaderLabel={TextList.feed}
      style={{ justifyContent: "space-between", flex: 1 }}
    >
      <CustomInput
        placeholder="Search Posts"
        placeholderTextColor={Theme.SearchInputPlaceHolderColor}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }} //@ts-ignore
        leftIcon={
          //@ts-ignore
          <SimpleLineIcons
            name="magnifier"
            size={20}
            color={Theme.bottomBarInactiveText}
          />
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
      <ScrollView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </ScrollView>

      <CustomButton
        text={TextList.Add_Post}
        onPress={() => {
          navigation.navigate("AddPost");
        }}
        iconName="plus"
      />
    </ScreenContainer>
  );
};

export default FeedScreen;
