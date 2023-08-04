import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";

const LoginForm = () => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.inputContainer}>
        <FormInput
          placeholderText={"Адреса електронної пошти"}
          name={"email"}
        />
        <FormInput placeholderText={"Пароль"} name={"password"} />
      </View>
      <PrimaryButton text={"Увійти"} />
      <TouchableOpacity>
        <Text style={styles.loginText}>Немає акаунту? Зареєструватися</Text>
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
    paddingTop: 50,
    paddingBottom: 120,
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

export default LoginForm;
