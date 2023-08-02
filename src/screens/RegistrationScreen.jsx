import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const RegistrationScreen = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const screenHeight = Dimensions.get("window").height;
  const overlayHeight =
    Platform.OS === "ios" ? screenHeight * 0.65 : screenHeight * 0.7;

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? -230 : -140}
      >
        <ImageBackground
          source={require("../assets/image/bg-image.jpg")}
          style={styles.image}
        >
          <View style={[styles.overlay, { height: overlayHeight }]}>
            <View style={styles.photoContainer} />
            <Text style={styles.title}>Реєстрація</Text>

            <TextInput style={styles.textInput} placeholder="Логін" />
            <TextInput
              style={styles.textInput}
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Пароль"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.visibilityButton}
              >
                <Text style={styles.visibilityButtonText}>
                  {isPasswordVisible ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <PrimaryButton text={"Зареєструватися"} />
            <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
          </View>
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

  overlay: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 90,
    alignItems: "center",
    rowGap: 16,
  },

  photoContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#ccc",
    borderRadius: 16,
    zIndex: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 16,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },

  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  visibilityButton: {
    position: "absolute",
    right: 10,
  },

  visibilityButtonText: {
    color: "#1B4371",
  },

  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  loginText: {
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
