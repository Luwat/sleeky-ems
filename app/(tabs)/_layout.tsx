import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="employees"
          options={{
            title: "Employees",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={28}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={28}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
