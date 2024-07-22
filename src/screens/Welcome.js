import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { normalize } from '../utils/helpers/dimen';
import { Colors } from '../themes/Themes';
import { Icons } from '../themes/Icons';
import { Fonts } from '../themes/Fonts';
import Modal from "react-native-modal";
import Sample from '../Sample';
import DrawerTab from '../components/common/DrawerTab';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation()
  const [drawerModalVisible, setDrawerModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.headerView} >
        <View style={{
          height: 50,
          // backgroundColor: 'red',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => {
            setDrawerModalVisible(true)
          }}>
            <Image
              source={drawerModalVisible == false ? Icons.menu : Icons.close}
              resizeMode='stretch'
              style={{
                height: normalize(30),
                width: normalize(30),
              }}
            />
          </TouchableOpacity>
          <Text style={{
            // backgroundColor:'pink',
            width: '79%', textAlign: 'center',
            fontSize: normalize(20),
            color: Colors.white,
            fontFamily:Fonts.Inter_SemiBold
          }}>Header1</Text>
          <Image
            source={Icons.menu}
            resizeMode='stretch'
            style={{
              height: normalize(30),
              width: normalize(30),
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => {
          navigation.navigate('BottomTabs')
}}>
            <Text style={{
            // backgroundColor:'pink',
            width: '79%', textAlign: 'center',
            fontSize: normalize(20),
            color: Colors.black,
            fontFamily:Fonts.Inter_SemiBold
          }}>Navigate to BottomTab</Text>
          </TouchableOpacity>            
      <DrawerTab
      visible={drawerModalVisible}
      onRequestClose={()=>{
        setDrawerModalVisible(false)
      }}
      />
      {/*
      <Modal isVisible={drawerModalVisible}
      animationIn={'bounceInRight'}
      animationOut={'bounceOutRight'}
        // onBackdropPress={()=>{
        //   setDrawerModalVisible(false)
        // }}
        style={{
          flex: 1,
           height: '100%',
          width: '100%',
          // backgroundColor:'pink',
          alignItems:'flex-end'
        }}
      >
        <View style={{
          flex: 1,
          height: '100%',
          width: '60%',
          backgroundColor: Colors.white
        }}>
        <TouchableOpacity onPress={() => {
          setDrawerModalVisible(false)
        }}>
          <Image
            source={Icons.close}
            resizeMode='stretch'
            style={{
              height: normalize(20),
              width: normalize(20),
              // alignSelf:'flex-end'
            }}
          />
        </TouchableOpacity>
          <Text style={{ backgroundColor: 'red' }}
            onPress={() => {
              setDrawerModalVisible(false)
            }}
          >I am the modal content!</Text>
        </View>
      </Modal>
      */}
   
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  headerView: {
    height: 50,
    backgroundColor: Colors.pink,
    // paddingHorizontal:normalize(10)
  }

})