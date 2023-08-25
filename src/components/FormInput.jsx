import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormInput = ({ placeholderText, name, handleInput, value }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      {name === "password" ? (
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.textInput, isFocused && styles.textInputFocused]}
            placeholder={placeholderText}
            name={name}
            value={value}
            secureTextEntry={!isPasswordVisible}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleInput}
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
      ) : (
        <TextInput
          style={[styles.textInput, isFocused && styles.textInputFocused]}
          placeholder={placeholderText}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleInput}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },

  textInputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
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
});

export default FormInput;
