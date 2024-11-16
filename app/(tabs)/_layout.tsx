import { Link, Redirect, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnBoarding = useUserStore((state) => state.hasFinishedOnboarding);

  if (!hasFinishedOnBoarding) {
    return <Redirect href = "/onboarding"/>
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen}}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Entypo name="leaf" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
