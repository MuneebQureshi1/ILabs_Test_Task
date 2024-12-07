import { Platform, StyleSheet } from "react-native";
import { horizontalResponsive, verticalResponsive } from "../utils/responsiveControlFunctions";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";
import { Theme } from "../constants/Theme";

export const globalStyle=StyleSheet.create({
    elevation0:{
        elevation:0
    },
    bottomBarStlye:{
        elevation:0,
        height:verticalResponsive(60),
        backgroundColor:Theme.mainBackgroundColor,
        borderTopWidth:0
    },
    Flex1:{
        flex:1
    },
    loaderContainer:{
        justifyContent: "center",
        height:
          Platform.OS == "android" ? hp(100) : hp(90),
      },
      headerStyle:{
        flexDirection:'row',
        height:verticalResponsive(48),
        justifyContent:'space-between',
        paddingHorizontal:horizontalResponsive(20),
      },
      verticalAlignment:{
        justifyContent:"center",
        alignItems:"center"
      },
      headerTextStyle:{
        fontSize: horizontalResponsive(17), fontWeight: "bold" 
      },
      defaultInputStyle:{
        width: horizontalResponsive(361),
        height: verticalResponsive(44),
        alignSelf: "center",
        borderRadius: horizontalResponsive(360),
        backgroundColor: Theme.inputBackgroundColor,
        paddingHorizontal: horizontalResponsive(15),
        borderBottomWidth: 0,
      },
      inputDefaultTextStyle:{
        fontSize: horizontalResponsive(17),
        color: Theme.SearchInputPlaceHolderColor,
      }
})