import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts } from '../utils/fonts';
import { Colors } from '../utils/color';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const Navigation = useNavigation();

  const handleLogin = () => {
    Navigation.navigate('LOGIN');
  };

  const handleSignup = () => {
    Navigation.navigate('SIGNUP');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: Colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: Colors.primary },
          ]}
          onPress={handleSignup}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  logo: {
    width: 139,
    height: 49,
    marginTop: 60,
    marginVertical: 45,
  },
  bannerImage: {
    width: 231,
    height: 265,
    marginTop: 25,
  },
  title: {
    fontSize: 50,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: Colors.primary,
    marginTop: 70,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: fonts.Medium,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 40,
    color: Colors.secondary,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginTop: 60,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 100,
  },
  loginButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: fonts.SemiBold,
  },
  signUpButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: fonts.SemiBold,
  },
});
