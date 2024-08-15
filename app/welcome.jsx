import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";


const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcome image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcomeImage.png")}
        />
        {/* title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Move It</Text>
          <Text style={styles.punchline}>Making Moves as Easy as 1-2-3.</Text>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Button
            title="Getting started"
            buttonStyles={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("signUp")}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("login")}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(10),
  },
  title: {
    color: theme.colors.primary,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.semibold,
  },
  punchline: {
    color: theme.colors.text,
    textAlign: "center",
    paddingHorizontal: wp(8),
    fontSize: hp(2),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(80),
    alignSelf: "center",
  },
  footer: {
    width: "100%",
    gap: 30,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
