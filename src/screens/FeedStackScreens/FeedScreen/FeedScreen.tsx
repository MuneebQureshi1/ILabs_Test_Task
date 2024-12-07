import { FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";
import { Theme } from "../../../constants/Theme";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../constants/svg";
import CustomInput from "../../../components/CustomInput/CustomInput";
import FeedItemComponent from "./components/FeedItem";
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
];
const FeedScreen = () => {
  const [search, setSearch] = useState<string>("");
  const renderItem = ({
    item,
  }: {
    item: { id: string; title: string; description: string };
  }) => <FeedItemComponent title={item.title} description={item.description} />;
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
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </ScreenContainer>
  );
};

export default FeedScreen;
