import { View, StyleSheet, Image, TextInput, Text, Button, TouchableOpacity, ImageBackground} from "react-native";
import CheckBox from 'expo-checkbox';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import PagesMainContainer from '../Comonents/pagesMainContainer';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import zxcvbn from 'zxcvbn';
import HeaderParts from "../Comonents/HeaderParts";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

let SignUp = () => {

  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSingUpPress = () => {
    navigation.navigate('OtpPage');
  }

  const handleSignInPress = () => {
    navigation.navigate("Login");
  }

  


  return (
    <>
    <HeaderParts />
    <View style = {styles.mainContainer}>
        {/* <View style={LoginStyles.signUpContainer}>  */}
        <Text style = {styles.signUpText}> Sign up </Text>
         {/* </View> */}

        <View style = {styles.Imagecontainer}>
          <Image source={require('../Alll_Images/SignUpImage.png')}
       style={{width: '100%', height: '100%', borderRadius : 15}} />
        </View>

        <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Phone Number" 
    />
  </View>

  <View style={styles.container}>
  <TextInput
      style={styles.input}
      placeholder="example@gmail.com"
    />
    </View>


        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
        <Ionicons name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="black" />
      </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={!showConfirmPassword}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
        <Ionicons name={showConfirmPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="black" />
      </TouchableOpacity>
    </View>


        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          // tintColors={{ true: '#F15927', false: 'black' }}
        />
        <Text style={styles.label}> Agree to Our terms of Service and private Policy  </Text>
      </View>

      <View style = {styles.BtnContainer}>
        <TouchableOpacity style = {styles.sigInBtn} >
          <Text style = {styles.signInBtnText} onPress={handleSingUpPress} > SIGN UP </Text>
        </TouchableOpacity>
        {/* <Text style = {{marginTop : 5, marginBottom : 5}}>
          <Text style = {styles.DontHave}> Already Have an Account? </Text > <Text style = {[styles.DontHave, {color : '#743089', fontSize : 24, fontWeight : '700'}]}>SignIn! </Text>
        </Text> */}

<View style={{  flexDirection : 'row'}}>
      <Text style={styles.DontHave}> Already Have an Account? </Text>
        <TouchableOpacity onPress={handleSignInPress} >
          <Text style={[
          styles.DontHave,
          { color: '#743089', fontSize: 20, fontWeight: '700'},
        ]}> SignIn! </Text>
        </TouchableOpacity>
      {/* </Text> */}
    </View>

        {/* <Text style = {styles.SignInWithText}>----- SIGN UP WITH ----- </Text> */}
      </View>

      {/* <View style = {styles.socialMediaContainer}>

      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faGoogle} size={40} color="#DB4437" />
      </View>

      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faFacebook} size={40} color="#3b5998" />
      </View>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faTwitter} size={40} color="#1DA1F2" />
      </View>
        </View> */}
    </View>

    </>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : 'white',
        height : '100%',
        width : '100%',
        marginTop : 0,

    },

    signUpContainer : {
        marginTop : 2,
        marginHorizontal : 10, 
        height : 50,
        borderStyle : 'solid',
        borderWidth : 4,
        borderRadius : 20,
        borderColor : '#F8F8F8',
        backgroundColor : '#F8F8F8',
        // opacity : 0.5
    },

    signUpText : {
        fontSize : 45,
        fontWeight : '900',
        textAlign : 'center',
        color : '#743089'

        // textAlign : "center"
        // marginLeft : 60,
    },
    Imagecontainer : {
      width : "auto",
      height : 180,
      marginTop : 5,
      marginHorizontal : 20,
      borderRadius : 20,
    //   borderColor : 'black',
    //   borderWidth : 4,
    //   borderColor : 'red',
    //   borderStyle : 'solid'
    },
    LoginImage : {
      width : '100%',
      height : '100%'
    },

    welcomeText : {
      color : '#9A4EAE',
      fontSize : 32,
      fontWeight : '800',
      fontStyle : 'italic',
      marginTop : 10, 
      marginLeft : 70
    },

    // continueText : {
    //   color : '#585858',
    //   fontSize : 20,
    //   marginLeft : 25
    // },

    Inps : {
      width : 340,
      borderColor : '#F8F8F8',
      borderWidth : 2,
      height : 50,
      marginVertical : 12, 
      marginHorizontal : 20,
      backgroundColor : '#F8F8F8',
      // backgroundColor : '#5e0acc',
      borderRadius : 10,
      fontSize : 18,
      textAlign : 'center',
      borderBottomColor : '#5e0acc'
    },

    checkboxContainer: {
      flexDirection: 'row',
      marginLeft : 20,
      marginTop : 2
    },
    checkbox: {
      alignSelf: 'center',
      color : '#9A4EAE'
    },
    label: {
      margin: 5,
      fontSize : 14.2
    },
    BtnContainer : {
     flex: 1,
     flexDirection : 'column',
     justifyContent : "space-between",
     alignItems : 'center'
    },
    sigInBtn : {
      width : 200,
      height : 50, 
      backgroundColor : '#743089',
      borderColor : '#743089',
      borderWidth : 5,
      borderRadius : 5,
      marginTop : 10
    },

    signInBtnText : {
      color : 'white', 
      textAlign : 'center',
      fontSize : 23,
      fontWeight : '800',
      marginTop : 5
    },
    socialMediaContainer : {
      flex : 1,
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop : 5,
      marginHorizontal : 100
        },

    SignInWithText : {
      color : '#DB4437',
      fontSize : 22,
      textAlign : "center",
      marginTop : 2, 
      marginBottom : 2
    },
    DontHave : {
      color : '#585858',
      fontSize : 17, 
      fontStyle : 'italic',
      fontWeight : '500'
    },

    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: 'grey',
      paddingBottom: 5,
      marginHorizontal : 40,
      marginVertical : 10
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 8,
      textAlign : 'center',
      fontSize : 18,
      fontWeight : '800'

    },
    eyeIcon: {
      padding: 8,
    },
});

export default SignUp;




