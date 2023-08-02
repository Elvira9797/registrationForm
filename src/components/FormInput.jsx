import { View } from "react-native";

const FormInput = ({ placeholderText }) => {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder={placeholderText} />
    </View>
  );
};

export default FormInput;
