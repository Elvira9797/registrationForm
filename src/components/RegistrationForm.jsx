import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";
import ProfileAvatar from "./ProfileAvatar";

const RegistrationForm = () => {
  return (
    <View style={styles.overlay}>
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
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  overlay: {
    position: "relative",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 90,
        paddingBottom: 90,
      },
      android: {
        ...(screenHeight <= 1920
          ? {
              paddingTop: 60,
              paddingBottom: 25,
            }
          : {
              paddingTop: 90,
              paddingBottom: 90,
            }),
      },
    }),
  },

  inputContainer: {
    width: "100%",
    rowGap: 12,
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
