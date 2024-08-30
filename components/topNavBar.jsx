import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { useRouter } from "expo-router";
import BackButton from "../components/BackButton";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";

const TopNavBar = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <BackButton
          BackButtonStyle={styles.backButton}
          iconColor={theme.colors.textWhite}
          router={router}
        />
        <Text style={styles.textStyle}>Move It</Text>
      </View>
    </>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    position: "absolute",
    top: 0,
    paddingHorizontal: wp(5),
    height: hp(11),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  backButton: {
    position: "absolute",
    top: hp(6),
    left: wp(5),
  },
  textStyle: {
    paddingTop: hp(5),
    fontSize: hp(3),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textWhite,
  },
});
