// CustomHeader1.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { normalize } from '../../utils/helpers/dimen';

const CustomHeader1 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getHeaderContent = () => {
    switch (route.name) {
      case 'Home':
        return (
          <>
            <Text style={styles.headerTitle}>Home</Text>
            <Button
              title="Go to Settings"
              onPress={() => navigation.navigate('Settings')}
            />
          </>
        );
      case 'Settings':
        return (
          <>
            <Text style={styles.headerTitle}>Settings</Text>
            <Button
              title="Go to Home"
              onPress={() => {navigation.navigate('Home')}}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.headerContainer}>
      {getHeaderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: normalize(40),
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation:5,
  },
  headerTitle: {
    fontSize: 20,
  },
});

export default CustomHeader1;
