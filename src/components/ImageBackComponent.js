import React from 'react';
import { Dimensions, ImageBackground, Platform, Text, StatusBar } from 'react-native';
import Icons from '../themes/Icons';
import MyStatusBar from '../utils/helpers/MyStatusbar';
import normalize from '../utils/helpers/normalize';
// import Fonts from '../themes/Fonts';

export default function ImageBackComponent() {
  return (
    <>
      <MyStatusBar />
      <ImageBackground
        source={Icons.Background}
        resizeMode='cover'

        style={{
          flex: 1,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,

          position: 'absolute',
          top: StatusBar.currentHeight

        }}
      >
        <Text style={{
          position: 'absolute', bottom: normalize(10), textAlign: 'center', alignSelf: 'center',
          color: 'black', fontSize: normalize(13), fontWeight: 'bold', 
        }}>
          Brought to you by CCU</Text>
      </ImageBackground>
    </>
  );
}
