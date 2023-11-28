import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

import {firebase} from '../database/firebase.config';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateInputVal = (val, prop) => {
    if (prop === 'email') {
      setEmail(val);
    } else if (prop === 'password') {
      setPassword(val);
    }
  };

  const onGoogleButtonPress = async () => {
    firebase
      .auth()
      //configure client ids
      .GoogleSignin.configure({
        androidClientId:
          '316245655700-2d78emuuk1flopf0aq4o0d5v361omgrc.apps.googleusercontent.com',
      });
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  // const handleLogin = async (email, password) => {
  //   console.log('login in user');
  //   console.log(email, password);

  //   try {
  //     const response = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password);
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/sukuna.jpg')}
        resizeMode="stretch"
        style={styles.img}
        blurRadius={2}>
        <View style={styles.loginContainer}>
          <Text style={styles.welcomMsg}>Welcome Back !</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            autoCapitalize="none"
            value={email}
            onChangeText={val => updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            autoCapitalize="none"
            value={password}
            onChangeText={val => updateInputVal(val, 'password')}
            secureTextEntry={true}
          />

          {/* <TouchableHighlight
            style={styles.btn}
            onPress={() => handleLogin(email, password)}>
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight> */}
          <TouchableHighlight
            style={styles.btn}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>New user? Create Account</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn}>
            <Text
              style={styles.text}
              onPress={() =>
                onGoogleButtonPress().then(() => {
                  console.log('Signed in with Google');
                })
              }>
              Login using Google
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    height: '70%',
    width: '70%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    margin: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  img: {
    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10,
    width: '80%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  welcomMsg: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 120,
    marginBottom: 30,
  },
});
