import { StyleSheet } from "react-native";
import {
  horizontalResponsive,
  verticalResponsive,
} from "../../../utils/responsiveControlFunctions";
import { Theme } from "../../../constants/Theme";

export const FeedStyleSheet = StyleSheet.create({
  FeedItemcontainer: {
    height: verticalResponsive(90),
    paddingHorizontal: horizontalResponsive(20),
    justifyContent: "center",
    flexDirection: "row",
  },
  FeedItemtextContainer: {
    height: "100%",
    width: "95%",
    justifyContent: "center",
    borderBottomWidth: 0.2,
    borderColor: Theme.tableCellDescription,
  },
  FeedItemtitle: {
    fontSize: horizontalResponsive(17),
    color: Theme.SearchInputPlaceHolderColor,
  },
  FeedItemdescription: {
    fontSize: horizontalResponsive(17),
    color: Theme.tableCellDescription,
  },
  FeedItemiconContainer: {
    height: "100%",
    justifyContent: "center", // Assuming vertical alignment
  },
});
