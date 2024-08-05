import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
  } from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import React from 'react';
  import Splash from '../screens/Splash';
  import Welcome from '../screens/Welcome';
import BottomTabs from './BottomTabs';
 import SubHomePage from '../screens/home/SubHomePage'
 import Home from '../screens/home/Home'
 import Profile from '../screens/profile/Profile'


  const StackNav = props => {
    const Stack = createStackNavigator();
     
    const mytheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
      },
    };
    const Screens = {
      Splash:Splash,
      Welcome:Welcome,
      BottomTabs:BottomTabs,
      SubHomePage:SubHomePage,
      Home:Home,
      Profile:Profile
    }
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
  