import { Image, Alert, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../../helpers/common";
import Button from "../../components/Button";
import { theme } from "../../constants/theme";
import { useRouter } from "expo-router";

const Home = () => {
  const { user, setAuth } = useAuth();

  const router = useRouter();

  //console.log('user: ', user);

  const onLogout = async () => {
    //setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign out", "Error signing out!");
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/homeScreen.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <Text style={styles.textStyle}>What do you need help with?</Text>
          {/* button */}
          <Button
            title="Move and Deliver Items"
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: theme.colors.primary },
            ]}
            textStyle={{ color: theme.colors.textWhite }}
            buttonStyles={{ marginHorizontal: wp(1) }}
            onPress={() => router.push("takePhoto")}
          />
          <Button
            title="Buy and Deliver from Stores"
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: theme.colors.secondary },
            ]}
            textStyle={{ color: theme.colors.textBlack }}
            buttonStyles={{ marginHorizontal: wp(1) }}
            onPress={() => router.push("signUp")}
          />
          <Button
            title="Airport Transport"
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: theme.colors.primary },
            ]}
            textStyle={{ color: theme.colors.textWhite }}
            buttonStyles={{ marginHorizontal: wp(1) }}
            onPress={() => router.push("signUp")}
          />
          <Button
            title="Large Scale Relocation"
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: theme.colors.secondary },
            ]}
            textStyle={{ color: theme.colors.textBlack }}
            buttonStyles={{ marginHorizontal: wp(1) }}
            onPress={() => router.push("signUp")}
          />
        </View>
      </View>
      <Button title="Logout" onPress={onLogout} />
    </ScreenWrapper>
  );
};

export default Home;

//const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    //alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(10),
    gap: hp(2.5),
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  image: {
    width: wp(100),
    height: hp(33),
  },
  buttonStyle: {
    height: hp(9),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continous",
    borderRadius: theme.radius.xl,
  },
  textStyle: {
    fontSize: hp(2.7),
    fontWeight: theme.fonts.semibold,
    alignSelf: "center",
    marginBottom: hp(1),
  },
});
