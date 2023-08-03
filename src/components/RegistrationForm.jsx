import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";
import ProfileAvatar from "./ProfileAvatar";

const RegistrationForm = () => {
  const screenHeight = Dimensions.get("window").height;
  const overlayHeight =
    Platform.OS === "ios" ? screenHeight * 0.65 : screenHeight * 0.7;

  return (
    <View style={[styles.overlay, { height: overlayHeight }]}>
      <ProfileAvatar />
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputContainer}>
        <FormInput placeholderText={"Логін"} name={"login"} />
        <FormInput
          placeholderText={"Адреса електронної пошти"}
          name={"email"}
        />
        <FormInput placeholderText={"Пароль"} name={"password"} />
      </View>
      <PrimaryButton text={"Зареєструватися"} />
      <TouchableOpacity>
        <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "relative",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 90,
    alignItems: "center",
  },

  inputContainer: {
    width: "100%",
    rowGap: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 32,
  },

  loginText: {
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationForm;
