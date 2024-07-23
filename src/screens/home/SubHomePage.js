import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../themes/Themes'
const name = 'xyz'
export default function  SubHomePage () {
    const navigation = useNavigation()
  //  const  name = 'Anita';
  //   const name ="AAAAA";
    // console.log("name",name)

//     const name = "Charlie";
//     let name1 = "Charlie1 ";

// const greeting = `Hello, ${name} ${name1}! Welcome to ES6.`;
// console.log(greeting);

const arr = [1, 2, 3];
console.log(arr); 
// const arr1 = [10,11];

// const newArr = [...arr, ...arr1];
// console.log(newArr); // [1, 2, 3, 4, 5]

function sum(...args) {
  return args.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3));

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);

  return (
    <View style={styles.container}>
        <View style={{backgroundColor:Colors.white,height: 50,}}>
            <Text 
            onPress={()=>{
                navigation.goBack()
            }}
            >{'Header'}</Text>
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