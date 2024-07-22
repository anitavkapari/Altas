import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../themes/Themes'

export default function  SubHomePage () {
    const navigation = useNavigation()
 
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:Colors.white,height: 50,}}>
            <Text 
            onPress={()=>{
                navigation.goBack()
            }}
            >Header</Text>
        </View>
      <Text>Sub Home</Text>
      </View>
  )
}


const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'pink',
    // justifyContent:'center',
    // alignItems:'center'
  },
  textstyle:{
  
  }
})