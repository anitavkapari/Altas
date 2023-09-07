import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../screens/splash/Splash';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import Dashboard from '../screens/home/Dashboard';
import EditUnassignedCase from '../screens/home/EditUnassignedCase';
import UnassignedCase from '../screens/home/UnassignedCase';


const StackNav = props => {
  const Stack = createStackNavigator();
  // const AuthReducer = useSelector(state => state.AuthReducer);
 

  const mytheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  };
  const Screens = {
    Splash:Splash,
    LoginScreen:LoginScreen,
    HomeScreen:HomeScreen,
    Dashboard:Dashboard,
    EditUnassignedCase:EditUnassignedCase,
    UnassignedCase:UnassignedCase
  }
    // AuthReducer?.getTokenResponse == null
    //   ? {
          
    //     }
    //   : {
         
    //     };

  // if (AuthReducer.isLoading) {
  //   return <Splash />;
  // } else {
    return (
      <NavigationContainer theme={mytheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {Object.entries({
            ...Screens,
          }).map(([name, component]) => {
            return <Stack.Screen name={name} component={component} />;
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
// };

export default StackNav;
