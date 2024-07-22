import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export default function  Sample (props) {
    // const [txtVisible, SetTextVisible] = useState(false)
// console.log('object',txtVisible)
  return (
    <View style={styles.container}>
      <Text>{props.txtVisible == true ? 'hello' : 'hi'}</Text>
      <TouchableOpacity onPress={props.onClickMe}>
      <Text style={styles.textstyle}>Click Me</Text>
      <Text>
      {props.count}
      </Text>
      </TouchableOpacity>
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