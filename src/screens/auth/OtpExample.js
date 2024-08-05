import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { normalize } from '../../utils/helpers/dimen';
import { StatusBar } from 'react-native';
import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Themes';



const OtpExample = props => {



  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);


  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setfour] = useState('');

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimerCount(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const otp = () => {
  //   let interval = setInterval(() => {
  //     setTimerCount(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // };

  function resendOTP() {
    setOne('');
    setTwo('');
    setThree('');
    setfour('');
  }

  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
        
          <Text style={[styles.footerORTxt, { color: Colors.black }]}>
            enter code
            </Text>
          <Text style={styles.headerDescTxt}>
            Please enter the
              <Text style={{ color: Colors.bgColor, fontFamily: Fonts.Inter_Bold }}> {" "}4 digit code </Text>
              sent to your email
            </Text>

          <View
            style={styles.otpContainer}>

            {/* {/ ///////////first number/////////// /} */}
            <View
              style={[styles.otpBoxView, {
                borderColor:
                  one.length > 0 ? Colors.cardBorder : Colors.gray12,
                // backgroundColor:Colors.bgColor
                // one.length > 0
                //   ? Colors.cardBackground
                //   : Colors.lightdark_White2,
              }]}>
              <TextInput
                value={one}
                ref={inputRef1}
                onChangeText={value => {
                  setOne(value);
                  if (value.length > 0) {
                    inputRef2.current.focus();
                  }
                }}
                autoFocus={true}
                keyboardType='numeric'
                maxLength={1}
                //   onBlur={() => {
                //     setBlureffect(false);
                //   }}
                style={styles.otpTxtInputView}
              // onLayout={() => inputRef1.current.focus()}
              />
            </View>

            {/* //////////second number///////////*/}
            <View
              style={[styles.otpBoxView, {
                // borderColor:
                //   two.length > 0 ? Colors.cardBorder : Colors.gray12,
                // backgroundColor:Colors.bgColor
                // two.length > 0
                //   ? Colors.cardBackground
                //   : Colors.lightdark_White2,
              }]}>
              <TextInput
                value={two}
                ref={inputRef2}
                onChangeText={value => {
                  setTwo(value);

                  if (value.length > 0) {
                    inputRef3.current.focus();
                  } else {
                    inputRef1.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    inputRef1.current.focus();
                  }
                }}
                //   onBlur={() => {
                //     setBlureffect1(false);
                //   }}
                //   onFocus={() => setBlureffect1(true)}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpTxtInputView}
              />
            </View>

            {/* {/ ////////////third number////////// /} */}
            <View
              style={[styles.otpBoxView, {
                borderColor:
                  three.length > 0 ? Colors.cardBorder : Colors.gray12,
                // backgroundColor:Colors.bgColor
                // three.length > 0
                //   ? Colors.cardBackground
                //   : Colors.lightdark_White2,
              }]}>
              <TextInput
                value={three}
                ref={inputRef3}
                onChangeText={value => {
                  setThree(value);

                  if (value.length > 0) {
                    inputRef4.current.focus();
                  } else {
                    inputRef2.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    inputRef2.current.focus();
                  }
                }}
                //   onBlur={() => {
                //     setBlureffect2(false);
                //   }}
                //   onFocus={() => setBlureffect2(true)}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpTxtInputView}

              />
            </View>
            {/* // {/ /////////fourth number/////////////// /} */}
            <View

              style={[styles.otpBoxView, {
                borderColor:
                  four.length > 0 ? Colors.cardBorder : Colors.gray12,
                // backgroundColor:Colors.bgColor
                // four.length > 0
                //   ? Colors.cardBackground
                //   : Colors.lightdark_White2,
              }]}
            >

              <TextInput
                value={four}
                ref={inputRef4}
                onChangeText={value => {
                  setfour(value);

                  if (value.length > 0) {
                    inputRef4.current.focus();
                  } else {
                    inputRef3.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    inputRef3.current.focus();
                  }
                }}
                //   onBlur={() => {
                //     setBlureffect3(false);
                //   }}
                //   onFocus={() => setBlureffect3(true)}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpTxtInputView}

              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // NavigationService.navigate('ChangePassword', {
              //   email: email,
              // });
            }}
            style={{
              height: normalize(30), width: '100%',
              backgroundColor: 'pink',
              borderRadius: normalize(5),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: normalize(25),
            }}
          >
            <Text style={styles.logintxt}>
              Continue
              </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default OtpExample;

const styles = StyleSheet.create({
  otpContainer: {
    // paddingHorizontal: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: normalize(35)
    // backgroundColor:'red'
  },
  otpBoxView: {
    height: normalize(35),
    width: normalize(60),
    // borderWidth: 2,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor
  },
  otpTxtInputView: {
    fontSize: normalize(14),
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.Inter_Medium,
  },
  headerDescTxt: {
    fontFamily: Fonts.Inter_Medium,
    fontSize: normalize(11),
    color: '#7EB5D0',
    paddingTop: normalize(15),
    textAlign: 'center',
  },
  footerForgotPassContainer: {
    fontFamily: Fonts.Inter_Medium,
    fontSize: normalize(11),
    textAlign: 'right',
    lineHeight: 20,
    color: 'background: rgba(80, 136, 164, 1)',
    marginTop: normalize(10),
  },
  //Anita
  mainContainer: {
    // flex: 1,
      backgroundColor: Colors.white,
    height: '70%',
    width: '100%',
    alignItems:'flex-end',
    borderTopEndRadius:normalize(20),
    borderTopLeftRadius:normalize(20)
  },
  container: {
    height: '100%',
    width: '90%',
    // backgroundColor: 'red',
    alignSelf: 'center'
  },
  footerORTxt: {
    fontFamily: Fonts.Inter_Medium,
    fontSize: normalize(11),
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: normalize(30)
  },
  emailtax: {
    fontFamily: Fonts.Inter_Medium,
    fontSize: normalize(11),
    // textAlign:'center',
    // textTransform:'uppercase',

  },
  logintxt: {
    fontFamily: Fonts.Inter_Medium,
    fontSize: normalize(12),
    color: Colors.plusIcon
  },
  searchInputContainer: {
    width: '92%',
    fontSize: normalize(12),
    fontFamily: Fonts.Inter_Medium,
    color: Colors.white,
    width: '100%',
    height: normalize(35),
    backgroundColor: Colors.bgColor,
    borderRadius: 8,
    paddingHorizontal: normalize(15),
    marginTop: normalize(5)
  },
});

