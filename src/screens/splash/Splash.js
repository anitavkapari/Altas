import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icons from '../../themes/Icons';
const {height, width} = Dimensions.get('screen');
import {useDispatch, useSelector} from 'react-redux';

import { useNavigation } from '@react-navigation/native';
let status = '';
const Splash = props => {
  const navigation = useNavigation()
  const AuthReducer = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen')
    }, 2000);
  }, []);

 
  return (
    <ImageBackground
    style={{width: width, height: height,}} resizeMode='stretch'
    source={Icons.Background}
  />
  );
};

const style = StyleSheet.create({});
export default Splash;
