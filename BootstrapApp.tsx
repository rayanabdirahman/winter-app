import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";

const App = () => (
  <NativeBaseProvider>
    <Navigation />
    <StatusBar style="auto" />
  </NativeBaseProvider>
);

const BootstrapApp = () => <App />;

export default BootstrapApp;
