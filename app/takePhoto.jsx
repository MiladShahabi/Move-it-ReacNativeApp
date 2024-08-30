import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import TopNavBar from "../components/topNavBar";

const TakePhoto = () => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <ScrollView style={styles.scroll}>
        <Text>Takephoto</Text>
      </ScrollView>
    </View>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    paddingVertical: 100,
  },
});
