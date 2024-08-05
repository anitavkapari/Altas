import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function  Splash (props) {
  useEffect(()=>{
    setTimeout(()=>{
      // props.navigation.navigate('SubHomePage')
      props.navigation.navigate('Welcome')

    },500)
  },[])
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
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