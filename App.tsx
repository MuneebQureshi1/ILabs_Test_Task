import { BackHandler } from "react-native";
import RootStack from "./src/navigations/RootStack/RootStack";
import { useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";

export default function App() {
  useEffect(() => {
    const backAction = () => {
      return true; // prevent default behavior (e.g., navigating back)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // clean up event listener on unmount
  }, []);
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
