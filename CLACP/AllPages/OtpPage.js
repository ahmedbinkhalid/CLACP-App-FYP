
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import HaderPart from '../Comonents/Hader';
import FooterPart from '../Comonents/Footer';
import CustomButton from '../Comonents/CustomeButton';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import HeaderParts from '../Comonents/HeaderParts';
import { useNavigation } from '@react-navigation/native';

const OtpPage = () => {
  const navigation = useNavigation();
  
  const handleVerifyOtp = () => {
    navigation.navigate('WelcomePage');
  }
  return (
    <>
    <HeaderParts />
      <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <View style = {styles.secondMainContainer}>

      
      <View style = {styles.imgContainer}>
        <Image source={require('../Alll_Images/SignUpImage.png')}
       style={{width: '100%', height: '100%', borderRadius : 15}} />
      </View>

      <View style = {styles.textContainer}>
      <Text style = {styles.otpText}> OTP </Text>
      <Text style = {styles.fourDigitText}> Enter a 4 Digit code sent to +92-3160795640 </Text>

      <View style = {styles.inpContainer}>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
      </View>

      <Text style = {styles.dontReceiveText}> 
        <Text> Don't Receive Code?</Text> 
        <Text style = {{color : '#743089', fontWeight : '900', fontSize : 25}}> Resend! </Text>
      </Text>

      </View>

      <View style = {styles.btnConatiner}>
        <CustomButton btnText = "Verify" iconType = "faCheck"/>
      </View>

      </View>
      </View>

      </>
  );
}

export default OtpPage;

const styles = StyleSheet.create({
  mainContainer : {
    marginTop : 42,
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    backgroundColor : 'white', 
  },

  secondMainContainer : {
    height : 'auto',
    width : '100%',
    paddingHorizontal : 30,
    paddingVertical : 17,
    //   borderStyle : 'solid',
    // borderColor : 'red',
    // borderWidth : 4,
    marginBottom : 50

  },
  imgContainer : {
    width : 330,
    height : 180, 
  },

  img : {
    width : 'auto',
    height : 'auto'
  },

  textContainer : {
    height : 260, 
    width : 330,
    marginTop : 5,
    padding : 3,
  },

  otpText : {
    fontSize : 45,
    color : '#743089',
    textAlign : 'center',
     fontWeight : '900'
  },

  fourDigitText : {
    color : '#585858',
    fontSize : 24, 
    fontStyle : 'italic',
    fontWeight : '600',
    textAlign : 'center' ,
  },

  inpContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    margin : 15, 
    height : 60, 
    width : 'auto'
  },

  inps : {
    width : 30,
    height : 40,
    borderStyle : 'solid',
    borderBottomWidth : 5,
    borderBottomColor : '#743089',
    fontSize : 30,
    fontWeight : '800',
    textAlign : 'center',
    color : '#743089'

  },

  dontReceiveText : {
    color : '#585858',
    fontSize : 22, 
    fontStyle : 'italic',
    fontWeight : '500',
    textAlign : 'center' ,
  },

  btnConatiner : {
    height : 70, 
    width : 330,
    justifyContent : 'center',
    alignItems : 'center',
    paddingLeft : 15,
  }
});

