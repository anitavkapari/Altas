import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function  Home (props) {
 
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      </View>
  )
}


const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center'
  },
  textstyle:{
  
  }
})