import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../themes/Themes';
import { normalize } from '../../utils/helpers/dimen';
import { Fonts } from '../../themes/Fonts';
import { useNavigation } from '@react-navigation/native';

export default function Profile(props) {
  const navigation = useNavigation()
// console.log('props.route.param.employee',props.route.params.employee);
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState(11111)

  useEffect(() => {
    // setData(props.route.params.employee)
    setTimeout(()=>{
       fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(JSON.stringify(data));
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
      // setData(props.route.params.employee)

      console.log('Hellooo...');
    },2000)
    setUserId(11)
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(JSON.stringify(data));
    //     setLoading(false);
    //   })
    //   .catch(error => console.error('Error fetching data:', error));

  }, [userId]);

  // console.log('object', data);
  if (loading) {

    return (
      <View style={[styles.container,{justifyContent:'center'}]}>
       <ActivityIndicator size="small" color="#0000ff" />
    <Text style={{textAlign:'center'}}>Please wait few seconds.....</Text>
    </View>
    )
  }

  return (
    <View style={styles.container}>
        {/* <View style={styles.header}> */}
     {/* <Text
          onPress={() => {
            // navigation.goBack()
            setUserId(3000)
          }}
        >{'Back'}{userId}</Text> */}
     {/* </View> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id?.toString()}
     
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={[styles.textTitle, {
              fontFamily: Fonts.Inter_Bold,
            }]}>id: {item.id} </Text>
            <Text style={[styles.textTitle, {
              fontFamily: Fonts.Inter_Medium,
            }]}>Name: {item.name} </Text>
            <Text style={[styles.textTitle, {
              fontFamily: Fonts.Inter_Regular,
            }]}>department: {item.department} </Text>
          </View>
        )}
      />
     
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    width: '100%',
    alignSelf: 'center'

    // justifyContent: 'center',
    // alignItems: 'center'
  },
  textTitle: {
    fontSize: normalize(15),
    textTransform:'capitalize',
    color: Colors.black
  },
  header:{
    height:normalize(50),
    backgroundColor:Colors.white,
    justifyContent:'center',
    paddingHorizontal:normalize(15)
  },
  userCard: {
    width: '90%',
    height: normalize(100),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: normalize(5),
    padding: normalize(10),
    borderBottomEndRadius:normalize(20),
    borderTopStartRadius:normalize(20),
    // borderRadius: normalize(10),
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 5
  },
})