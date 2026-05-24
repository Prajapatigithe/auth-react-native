import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Colors } from '../utils/color';
import { fonts } from '../utils/fonts';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={30} color={Colors.white} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color={Colors.secondary} />
          <TextInput
            style={{ flex: 1, marginLeft: 10 }}
            placeholder=" Enter your email "
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <SimpleLineIcons
              name="screen-smartphone"
              size={20}
              color={Colors.secondary}
            />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              placeholder="Enter your phone no"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <SimpleLineIcons name="lock" size={20} color={Colors.secondary} />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              placeholder=" Enter your password"
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
              <SimpleLineIcons
                name={secureEntry ? 'eye' : 'eye-off'}
                size={20}
                color={Colors.secondary}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>or continue with</Text>

          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image
              source={require('../assets/google.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.accountText}> Already have an account !</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signUpText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 50,
    width: 50,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 30,
  },
  headingText: {
    fontSize: 37,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    height: 50,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: Colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    marginTop: 30,
    padding: 10,
  },
  loginText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.Regular,
    marginVertical: 20,
    marginTop: 30,
    marginBottom: 30,
    color: Colors.primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  googleImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: Colors.primary,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  accountText: {
    color: Colors.primary,
    fontFamily: fonts.Regular,
    fontSize: 15,
  },
  signUpText: {
    color: Colors.primary,
    fontFamily: fonts.SemiBold,
    marginLeft: 10,
    fontSize: 17,
  },
});
