import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Dimensions,
} from "react-native";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const getKeyboardVerticalOffset = () => {
    const windowHeight = Dimensions.get("window").height;

    if (Platform.OS === "ios") {
      if (windowHeight >= 812) {
        return -220;
      } else {
        return -140;
      }
    } else {
      return -180;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={getKeyboardVerticalOffset()}
      >
        <ImageBackground
          source={require("../assets/image/bg-image.jpg")}
          style={styles.image}
        >
          <LoginForm />
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

export default LoginScreen;
