import { store } from "@/redux/store";
import { colors } from "@/utils/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBar
        style="dark"
        backgroundColor={colors.white}
        translucent={false}
      />
      <Stack
        initialRouteName="(protected)"
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}
