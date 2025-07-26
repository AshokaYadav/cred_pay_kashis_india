// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

type LoginScreenProps = {
  setIsLoggedIn: (val: boolean) => void;
  onLoginSuccess: () => void;
};

// const LoginScreen = ({ setIsLoggedIn, onLoginSuccess }: LoginScreenProps) => {
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     onLoginSuccess(); // This will trigger the navigation
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Login Screen</Text>
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 24 },
// });

// export default LoginScreen;



import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import { AuthContext } from '../context/AuthContext';

 const LoginScreen = ({ setIsLoggedIn, onLoginSuccess }: LoginScreenProps) => {

     const handleLogin = () => {
    setIsLoggedIn(true);
    onLoginSuccess(); // This will trigger the navigation
  };
//   const { redirectTo, rechargeData } = route.params;
//   const { login } = useContext(AuthContext);
  

//   const handleLogin = async () => {
//     // await login();
//     // navigation.replace(redirectTo, { rechargeData });
//   };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Google login pressed");
  };

  const handleAppleLogin = () => {
    // Add your Apple login logic here
    console.log("Apple login pressed");
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/load.jpg')} style={styles.logoImage} />

      <ImageBackground source={require('../assets/onboard1.jpg')} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.appName}>Your App Name</Text>
          <Text style={styles.subtitle}>Login to continue</Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In using Mobile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
            <Text style={styles.buttonText}>
              <Image source={require('../assets/google.png')} style={styles.icon} /> Sign In Using Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleAppleLogin}>
            <Text style={styles.buttonText}>
              <Image source={require('../assets/Apple_logo_black.png')} style={styles.icon} /> Sign In Using Apple ID
            </Text>
          </TouchableOpacity>
          
          <Text style={styles.orText}>------------- OR -------------</Text>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/google.png')} style={styles.icon} />
            <Image source={require('../assets/twitter.png')} style={styles.icon} />
            <Image source={require('../assets/facebook.png')} style={styles.icon} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 32,
    color: 'green',
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});