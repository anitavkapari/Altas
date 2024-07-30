import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../themes/Themes'
import EmplList3 from './EmplList3'
import EmployeeList from './EmployeeList'
import EmployeeList2 from './EmployeeList2'

const name = 'xyz'
export default function SubHomePage() {
  const navigation = useNavigation()
  //  const  name = 'Anita';
  //   const name ="AAAAA";
  // console.log("name",name)

  const name = "Charlie";
  let name1 = "Charlie1 ";

  const greeting = `Hello, ${name} ${name1}! Welcome to ES6.`;
  console.log(greeting);

  // const arr = [1, 2, 3];
  // console.log(arr); 
  // const arr1 = [10,11];

  // const newArr = [...arr, ...arr1];
  // console.log(newArr); // [1, 2, 3, 4, 5]

  // function sum(...args) {
  //   return args.reduce((total, num) => total + num);
  // }
  // console.log(sum(1, 2, 3));

  // const originalArray = [1, 2, 3];
  // const copiedArray = [...originalArray];

  // console.log(copiedArray);

  //rest operator 
  // function addNumbers(a,b,c,...argu){
  //   console.log(arguments)
  //   return a+b+c
  // }
  // console.log(addNumbers(1,2,3,10,4,5,5,6,7))
  // const sum = (...args) => {
  //   console.log(args);

  //   return args.reduce((acc, val) => acc + val, 0);
  // };
  // console.log(sum(1, 2, 3, 4));

  // const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
  // console.log(a); // 1
  // console.log(b); // 2
  // console.log(rest);

  //push
  let fruits = ['apple', 'banana', 'cherry', 'apple2', 'cherry22', 'apple22'];
  // ab3c12@gmail.com
  // console.log(arr,'main array')
  // arr.push('banana')
  // console.log(arr,'Push Array')
  // //pop
  // let lastFruit = arr.pop();
  // console.log(lastFruit,'pop item of array'); // Output: 'cherry'
  // console.log(arr,'after pop array');
  // //shift
  // let firstFruit = arr.shift();
  // console.log(firstFruit,'shift item of array'); // Output: 'apple'
  // console.log(arr,'after shift array');

  // //unshift
  // let fruits = ['banana', 'cherry'];
  // fruits.unshift('apple');
  // console.log(fruits);

  //slice
  // let slicedFruits = fruits.slice(3, 5);
  // console.log(slicedFruits); // Output: ['banana', 'cherry']
  // console.log(fruits);

  let students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 42 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 68,},
    { name: 'Eve', grade: 77 }
  ];

  // let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = students.filter(num => num.grade > 50);
  // console.log(evenNumbers); 

  let numbers = [1, 2, 3, 4, 5];
let sum = students.reduce((total, num) => total + num.grade, 0);
console.log('sum',sum); 

const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];

const concatenatedString = words.reduce((len, currentItem) =>  len + ' ' + currentItem

  // console.log('rdeuce', len + ' ' + currentItem)
);

// console.log(concatenatedString);

  return (
    <View style={styles.container}>
      {/* <View style={{ backgroundColor: Colors.white, height: 50, }}>
        <Text
          onPress={() => {
            navigation.goBack()
          }}
        >{'Header'}</Text>
      </View> */}
      {/* <Text>{sum} </Text> */}
      {/* {
        evenNumbers.map((item, index) => {
          // console.log('item', item, index)
          return (
            <View>
              <Text>{`Hello ${item.name} `} </Text>
              <Text>{item.grade} </Text>

            </View>

          )
        })
      } */}
      {/* <EmployeeList/> */}
      <EmplList3/>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // justifyContent:'center',
    // alignItems:'center'
  },
  textstyle: {

  }
})