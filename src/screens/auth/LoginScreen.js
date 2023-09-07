import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from '../../utils/helpers/dimen';
import { Colors } from '../../themes/Themes';
import Icons from '../../themes/Icons';
import MyStatusBar from '../../utils/helpers/MyStatusbar';
import ImageBackComponent from '../../components/ImageBackComponent';
import TextInputItem from '../../components/TextInputItem';
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/reducer/AuthReducer';
import Toast from '../../utils/helpers/Toast'
let status = ''
import connectionrequest from '../../utils/helpers/NetInfo';
export default function LoginScreen() {
  const navigation = useNavigation()
  const [Username, setusername] = useState('')
  const [Passhighlight, setpasshighlight] = useState(false)
  const [Userhighlight, setuserhighlight] = useState(false)
  const [Password, setpassword] = useState('')
  const [Passsecure, setpasssecure] = useState(true)
  const [Modalvisible, setmodalvisible] = useState(false)
  const AuthReducer = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch()
  function login() {
    let obj = {
      token_key: AuthReducer?.getTokenResponse?.result?.details?.token_key,
      email: Username,
      password: Password
    }
    connectionrequest()
      .then(() => {
        console.log(obj);
        dispatch(loginRequest(obj));
      })
      .catch(err => {
        Toast('Please connect To Internet');
      });

  }
  console.log(AuthReducer?.getTokenResponse?.result?.details?.token_key);
  if (status == '' || AuthReducer.status != status) {
    switch (AuthReducer.status) {
      case 'Auth/loginRequest':
        status = AuthReducer.status;
        break;

      case 'Auth/loginSuccess':
        status = AuthReducer.status;
        console.log(AuthReducer?.loginResponse, 'hello');
        navigation.navigate('Dashboard')
        break;
      case 'Auth/loginFailure':
        status = AuthReducer.status;
        // console.log(AuthReducer?.response)
        break;
    }
  }
  return (
    <>
      <MyStatusBar />
      <ImageBackComponent />
      <View style={{
        width: '100%', height: normalize(60), backgroundColor: Colors.theme, alignItems: 'center', justifyContent: 'center', alignContent: 'center',
        marginTop: StatusBar.currentHeight
      }}>
        <Text style={{ color: Colors.white, fontSize: normalize(18) }}>Login</Text>
      </View>
      <Image source={Icons.logo} style={{
        width: normalize(70),
        height: normalize(130), resizeMode: 'stretch', marginTop: normalize(10), alignSelf: 'center'
      }} />
      <View style={{ width: '90%', alignSelf: 'center', marginTop: normalize(20) }}>
        <TextInputItem widthInput={'100%'} leftimage={Icons.user} placeholder={'Username'}
          onChangeText={(val) => setusername(val)}
          value={Username}
          highlight={Userhighlight}
          onFocus={() => setuserhighlight(true)}
          onBlur={() => setuserhighlight(false)}
        />
      </View>
      <View style={{ width: '90%', alignSelf: 'center', marginTop: normalize(10) }}>
        <TextInputItem widthInput={'100%'} leftimage={Icons.padlock} placeholder={'Password'}
          onChangeText={(val) => setpassword(val)}
          value={Password}
          highlight={Passhighlight}
          onFocus={() => setpasshighlight(true)}
          onBlur={() => setpasshighlight(false)}
          rightbutton={true}
          securefunction={() => setpasssecure(!Passsecure)}
          isSecure={Passsecure}
        />
      </View>
      <TouchableOpacity onPress={() => login()} style={{
        height: normalize(45), width: '90%', alignSelf: 'center', backgroundColor: Colors.theme,
        borderRadius: normalize(20), marginTop: normalize(25), alignItems: 'center', justifyContent: 'center'
      }}>
        <Text style={{ fontSize: normalize(18), color: Colors.white }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setmodalvisible(true)} style={{ alignSelf: 'center' }}>
        <Text style={{
          color: '#09262a', fontSize: normalize(15), textAlign: 'center',
          marginTop: normalize(15), 
        }}>Forgot Password?</Text>
      </TouchableOpacity>
      <Image source={Icons.icon} style={{
        width: normalize(50),
        height: normalize(40), resizeMode: 'stretch', marginTop: normalize(25), alignSelf: 'center'
      }} />
      <Modal
        style={{ margin: 0, marginHorizontal: normalize(20) }}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={Modalvisible}
        animationInTiming={800}
        animationOutTiming={1000}
        onBackdropPress={() => setmodalvisible(false)}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: normalize(7),
          }}>
          <Text style={{
            color: '#09262a', fontSize: normalize(15), textAlign: 'center',
            marginTop: normalize(15), 
          }}>Forgot Password</Text>
          <View style={{ width: '100%', height: normalize(1), backgroundColor: Colors.theme, marginTop: normalize(8) }} />
          <Text style={{
            color: Colors.theme, fontSize: normalize(15), textAlign: 'center',
            marginTop: normalize(10),
          }}>Enter your registered email</Text>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: normalize(20) }}>
            <TextInputItem widthInput={'100%'} showleftimage={false} placeholder={'Email'}
              onChangeText={(val) => setusername(val)}
              value={Username}
              highlight={true}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', marginTop: normalize(10) }}>
            <TouchableOpacity onPress={() => setmodalvisible(false)} style={{
              width: '50%', height: normalize(40), backgroundColor: Colors.theme,
              borderBottomLeftRadius: normalize(7), alignItems: 'center', justifyContent: 'center'
            }}>
              <Text style={{ color: Colors.white, fontSize: normalize(13),}}>Cancel</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{
              width: '50%', height: normalize(40), backgroundColor: '#09262a', alignItems: 'center',
              justifyContent: 'center', borderBottomRightRadius: normalize(7)
            }}>
              <Text style={{ color: Colors.white, fontSize: normalize(13),}}>Ok</Text>

            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({


});
