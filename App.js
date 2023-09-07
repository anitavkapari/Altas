import 'react-native-gesture-handler';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNav from './src/navigators/StackNav'

export default function App() {
  return (
    // // <SafeAreaView style={{flex:1,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
    //   <View style={{flex:1,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
    //   <Text>Altas</Text>
    //   </View>
    // // {/* </SafeAreaView> */}
    <StackNav/>
  )
}

const styles = StyleSheet.create({})