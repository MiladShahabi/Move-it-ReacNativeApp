import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import TopNavBar from "../components/topNavBar";
import BackButton from "../components/BackButton";
import { theme } from "../constants/theme";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { wp } from "../helpers/common";

const TakePhoto = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton iconColor={theme.colors.text} router={router} />
        <ScrollView style={styles.scroll}>
          <Text>Takephoto</Text>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp(5),
  },
  scroll: {
    paddingVertical: 100,
  },
});
