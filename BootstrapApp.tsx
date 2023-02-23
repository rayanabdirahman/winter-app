import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation";

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Navigation />
    <StatusBar style="auto" />
  </SafeAreaView>
);

const BootstrapApp = () => <App />;

export default BootstrapApp;
