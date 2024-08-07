// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// const Counter = () => {
//   // Declare a state variable named 'count' and a function 'setCount' to update it
//   const [count, setCount] = useState(0);

//   // useEffect runs after the component renders
//   useEffect(() => {
//     console.log('Component mounted or updated');

//     // Cleanup function runs when the component unmounts or before the next effect runs
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, [count]); // Dependency array, effect runs when 'count' changes

//   return (
//     <View>
//       <Text>Count: {count}</Text>
//       <Button title="Increment" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };

// export default Counter;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator,FlatList } from 'react-native';
import { Fonts } from '../../themes/Fonts';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
  .then(response => {
    setData(response.data);
    setLoading(false);
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
    setLoading(false);  });

    // fetch('https://dummyapi.online/api/movies')
    //   .then(response => response.json())
    //   .then(json => {
    //     // let jsonDta = JSON.stringify(json)
    //     // console.log('jsonDta',json);
    //     setData(json);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     setLoading(false);
    //   });
  }, []);

  console.log(data);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => 
        { 
          //  console.log(item)
         return(
          <View style={{}}>
          <Text style={[, {
            fontFamily: Fonts.Inter_Bold,
          }]}>id: {item.id} </Text>
          <Text style={[, {
            fontFamily: Fonts.Inter_Medium,
          }]}>MoviewName: {item.movie} </Text>
          <Text style={[, {
            fontFamily: Fonts.Inter_Regular,
          }]}>rating: {item.rating} </Text>
        </View>
         )}
        }
      />
    </View>
  );
};

export default DataFetcher;