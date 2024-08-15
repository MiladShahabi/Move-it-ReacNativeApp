import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons"; // Assuming this is where your icons are stored
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Input from "../components/input";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome */}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <View style={styles.passwordInputWrapper}>
            <Input
              icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
              placeholder="Enter your Password"
              secureTextEntry={!passwordVisible}
              onChangeText={(value) => (passwordRef.current = value)}
              style={styles.passwordInput} // Adjust input styling if needed
            />
            <TouchableOpacity
              style={styles.eyeIconWrapper}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? "eyeOffIcon" : "eyeIcon"} // Updated icon names
                size={26}
                strokeWidth={1.6}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  passwordInputWrapper: {
    position: "relative", // To ensure the icon is positioned relative to the input
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 40, // Add padding to make space for the eye icon
  },
  eyeIconWrapper: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
