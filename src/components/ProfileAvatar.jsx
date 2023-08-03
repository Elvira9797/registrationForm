import { Image, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const ProfileAvatar = () => {
  const [avaIsOpen, setAvaIsOpen] = useState(null);

  const handlePress = () => {
    if (!avaIsOpen) {
      setAvaIsOpen(
        "https://i.pinimg.com/736x/da/80/60/da80603027e5e3eaf72af1fedcd4a29a.jpg"
      );
    } else {
      setAvaIsOpen(null);
    }
  };

  return (
    <View style={styles.photoContainer}>
      {avaIsOpen && <Image source={{ uri: avaIsOpen }} style={styles.avaImg} />}

      <View style={styles.iconWrapper}>
        {avaIsOpen ? (
          <View style={styles.iconBackground}>
            <AntDesign
              name="closecircleo"
              size={25}
              color="#BDBDBD"
              onPress={handlePress}
            />
          </View>
        ) : (
          <AntDesign
            name="pluscircleo"
            size={25}
            color="#FF6C00"
            onPress={handlePress}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 10,
  },

  avaImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  iconWrapper: {
    position: "absolute",
    zIndex: 20,
    bottom: 15,
    right: -12.5,
  },

  iconBackground: {
    borderRadius: 100,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileAvatar;
