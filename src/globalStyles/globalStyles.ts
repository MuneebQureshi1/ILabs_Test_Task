import { StyleSheet } from "react-native";
import { verticalResponsive } from "../utils/responsiveControlFunctions";

export const globalStyle=StyleSheet.create({
    elevation0:{
        elevation:0
    },
    bottomBarStlye:{
        elevation:0,
        height:verticalResponsive(60)
    }
})