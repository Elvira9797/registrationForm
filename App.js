import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
  // return <RegistrationScreen />;
}

const styles = StyleSheet.create({});
