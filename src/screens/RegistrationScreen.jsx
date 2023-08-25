import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationScreen = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? -185 : -90}
      >
        <ImageBackground
          source={require("../assets/image/bg-image.jpg")}
          style={styles.image}
        >
          <RegistrationForm />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default RegistrationScreen;
