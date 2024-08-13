import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";

const Button = ({
  buttonStyle,
  textStyle,
  title = '',
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
    const shadowStyle = {}
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}> 
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.secondary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continous',
        borderRadius: theme.radius.xl,
    },
    text: {
        color: theme.colors.dark,
        fontSize: hp(2.5),
        fontWeight: theme.fonts.medium,
        //textTransform: 'uppercase',
    },
  
});
