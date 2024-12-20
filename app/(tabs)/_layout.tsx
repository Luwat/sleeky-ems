import { Button, StyleSheet, Text, View } from "react-native";
import { router, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import LogoutButton from "@/components/employees/LogoutButton";

const Layout = () => {
  return (
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#161616",
          },
          tabBarStyle: {
            height: 70,
            backgroundColor: "#161616",
          },
          tabBarActiveBackgroundColor: "#161616",
          tabBarActiveTintColor: "#fafafa",
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 5,
          },
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tabs.Screen
          name="employees"
          options={{
            title: "Employees",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={32}
                color={focused ? "#fafafa" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={32}
                color={focused ? "#fafafa" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
