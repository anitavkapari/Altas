import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

import Icons from '../themes/Icons';
import { Colors } from '../themes/Themes';
// import Fonts from '../themes/Fonts';
import normalize from '../utils/helpers/normalize';
export default function TextInputItem(props) {
  // const [secureentry,setsecureentry]=useState(false)
//   console.log('props', props.ispopup);
  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }

  function onFocus() {
    if (props.onFocus) {
      props.onFocus();
    }
  }

  function onBlur() {
    if (props.onBlur) {
      props.onBlur();
    }
  }
  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }
  function onPressssequre() {
    if (props.onPressssequre) {
      props.onPressssequre();
    }
  }
  function securefunction() {
    if (props.securefunction) {
      props.securefunction();
    }
  }
  return (
  <>
  <View style={{
    // height: props.heightInput,
    width: props.widthInput,
    // borderColor: props.borderColor,
    // borderRadius: props.borderRadius,
    marginTop: props.marginTop,
    // backgroundColor:'pink',
    flexDirection: 'row',
    // borderBottomWidth:props.borderBottomWidth,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingRight:normalize(2)
    // borderBottomColor:'red',
    // borderBottomWidth:3
    
    // marginStart: props.marginStart,
    // borderWidth: props.borderWidth,

   }}>
   <View style={{flexDirection:'row',alignItems:'center'}}>
   
 {props.showleftimage &&  <Image source={props.leftimage} style={{width:normalize(14),height:normalize(14),tintColor:Colors.theme,resizeMode:'stretch',
  marginBottom:normalize(5)}}/>}
 
    <View style={{marginLeft:props.showleftimage? normalize(5):0}}>
   {props.value?.length>0 &&<Text style={{
  fontSize:normalize(12),position:'absolute',top:normalize(-10),color:Colors.theme,marginLeft:normalize(3)}}>{props.placeholder}</Text>
    }
    <TextInput style={[
        {
          color: props.textcolor,
          fontSize: props.fontSize,
          width:props.rightbutton?  normalize(230):normalize(250),
        },
      ]}
      numberOfLines={1}
      multiline={false}
      secureTextEntry={props.isSecure}
      placeholder={props.placeholder}
      editable={props.editable}
      placeholderTextColor={props.placeholderTextColor}
      value={props.value}
      fontWeight={props.fontWeight}
      onChangeText={text => {
        onChangeText(text);
      }}
      
      onFocus={text => {
        onFocus(text);
      }}
      onBlur={text => {
        onBlur(text);
      }}
    />
   </View>
   
     
    


   </View>
 {props.rightbutton && 
   <TouchableOpacity
   onPress={() => securefunction()}
   style={{
    padding:normalize(5),
    justifyContent: 'center',
    alignItems:'center',
    
  }}
>

{props.isSecure?<Image
source={ Icons.hide }
style={{
  width: normalize(18),
  height: normalize(18),
}}
/>:<Image
source={ Icons.eye }
style={{
  width: normalize(18),
  height: normalize(18),
  tintColor:Colors.theme
}}
/>}
</TouchableOpacity>
   }
   </View>
   <View style={{width:'100%',height:normalize(1),backgroundColor:props.highlight?Colors.theme: 'black',marginTop:normalize(-5)}}/>
  </>
  );
}

TextInputItem.propTypes = {
    heightInput:PropTypes.number,
    widthInput:PropTypes.any,
    borderColor:PropTypes.string,
    borderRadius:PropTypes.any,
    marginTop:PropTypes.number,
    borderBottomWidth:PropTypes.number,
    leftimage:PropTypes.string,
    textcolor:PropTypes.string,
    fontSize:PropTypes.number,
    isSecure:PropTypes.bool,
    placeholder:PropTypes.string,
    editable:PropTypes.bool,
    placeholderTextColor:PropTypes.string,
    value:PropTypes.string,
    fontWeight:PropTypes.any,
    onChangeText:PropTypes.func,
    onFocus:PropTypes.func,
    highlight:PropTypes.bool,
    onBlur:PropTypes.func,
    rightbutton:PropTypes.bool,
    securefunction:PropTypes.func,
    showleftimage:PropTypes.bool
};

TextInputItem.defaultProps = {
 heightInput:normalize(40),
 widthInput:'100%',
 borderBottomWidth:normalize(1.3),
 textcolor:'black',
 fontSize:normalize(17),
 isSecure:false,
 editable:true,
 placeholderTextColor:Colors.theme,
 value:'',
 fontWeight:'800',
 onChangeText:()=>{},
 onFocus:()=>{},
 onBlur:()=>{},
 rightbutton:false,
 securefunction:()=>{},
 showleftimage:true
};
