import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";

const welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({});
