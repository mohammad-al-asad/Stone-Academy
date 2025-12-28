import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const loadCredentials = async () => {
      const user = await AsyncStorage.getItem("user");
      const isFirstTime = await AsyncStorage.getItem("isFirstTime");
      const token = await AsyncStorage.getItem("token");

      if (isFirstTime != "true") {
        return router.replace("/onboarding");
      } else if (user && token) {
        dispatch(
          setCredentials({
            user,
            token,
          })
        );
      } else {
        return router.replace("/login");
      }
    };
    loadCredentials();
  });
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
