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
import { useState } from "react";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.overlay}>
      <ProfileAvatar />
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputContainer}>
        <FormInput
          placeholderText={"Логін"}
          name={"login"}
          value={login}
          handleInput={setLogin}
        />
        <FormInput
          placeholderText={"Адреса електронної пошти"}
          name={"email"}
          value={email}
          handleInput={setEmail}
        />
        <FormInput
          placeholderText={"Пароль"}
          name={"password"}
          value={password}
          handleInput={setPassword}
        />
      </View>
      <PrimaryButton text={"Зареєструватися"} handleSubmit={onLogin} />
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
