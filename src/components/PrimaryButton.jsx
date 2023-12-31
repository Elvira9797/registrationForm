import { StyleSheet, TouchableOpacity, Text } from "react-native";

const PrimaryButton = ({ text, handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PrimaryButton;
