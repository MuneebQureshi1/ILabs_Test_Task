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
import useCallApiOnLoad from "../../../hooks/useCallApiOnload";
import useGetApi from "../../../services/ApiHooks/getApis";
const FeedScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const { getAllPostApi } = useGetApi();
  const { data, loading } = useCallApiOnLoad(getAllPostApi);
  const renderItem = ({
    item,
  }: {
    item: { id: string; title: string; body: string };
  }) => (
    <FeedItemComponent
      title={item.title}
      description={item.body}
      editOnPress={() => {
        navigation.navigate("AddPost", { editForm: true, previousData: item });
      }}
    />
  );
  return (
    <ScreenContainer
      HeaderLabel={TextList.feed}
      style={{ justifyContent: "space-between", flex: 1 }}
      loading={loading}
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
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          windowSize={5}
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
