import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";

const Input = (props) => {
  return (
    <View
      style={[styles.container, props.containerStyles && props.containerStyles]}
    >
      {props.icon && props.icon}
      <TextInput 
       styles={{ flex: 1 }} 
       pleceholderTextColor={theme.colors.textLight}
       ref={props.inputRef && props.inputRef}
       {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: hp(7.2),
      alignItems: "center",
      justifyContent: "flex-start",
      borderWidth: 0.4,
      borderColor: theme.colors.text,
      borderRadius: theme.radius.xxl,
      borderCurve: 'continuous',
      paddingHorizontal: 18,
      gap: 12
    },
});
