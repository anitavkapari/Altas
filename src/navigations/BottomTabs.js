import * as React from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { normalize } from '../utils/helpers/dimen';
import { Colors } from '../themes/Themes';
import { Icons } from '../themes/Icons';
import { Fonts } from '../themes/Fonts';
import Welcome from '../screens/Welcome';
import SubHomePage from  '../screens/home/SubHomePage'
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
            <Text style={{
                height: 30, width: 100, backgroundColor: 'pink', textAlign: 'center',
            }}
                onPress={() => {
                    navigation.navigate('Welcome',)
                }}
            >Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
            <Text>Settings!</Text>
        </View>
    );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
                animation: 'slide_from_right',
            }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            {/* <HomeStack.Screen name="Welcome" component={Welcome} /> */}
            <HomeStack.Screen name="SubHomePage" component={SubHomePage} />

        </HomeStack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused}) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = Icons.hometab
                  } else if (route.name === 'Settings') {
                    iconName = Icons.menu;
                  } else if (route.name === 'Profile') {
                    iconName = Icons.user_d;
                  }
                  
      
                  // You can return any component that you like here!
                  return    <Image
                  style={{
                      // height: focused ? normalize(20) : normalize(18),
                      // width: focused ? normalize(20) : normalize(18),
                      height: normalize(22),
                      width: normalize(22),
                      tintColor: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
                  }}
                  source={iconName}
                  resizeMode="contain"
              />;
                },
                // tabBarShowLabel:false
                tabBarLabel: ({focused }) => (
                  <Text style={{
                    color: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)',
                    // color: '#1b178a',
                    fontSize: 11
      
                  }}
                  >{route.name}</Text>
                ),
                // tabBarActiveTintColor: '#2d4970',
                // tabBarInactiveTintColor: 'gray',
      
                unmountOnBlur: true,
                keyboardHidesTabBar: true,
                tabBarHideOnKeyboard: true,
                showIcon: true,
                // tabBarShowLabel: false,
// 
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: normalize(20),
                    borderTopRightRadius: normalize(20),
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.newcardBackground,
                    // height: Platform.OS == "android" ?
                    //     normalize(60) : normalize(70)
                },
              })}
           
        >
            <Tab.Screen
                name="Home" component={HomeStackScreen}
                options={{
                    unmountOnBlur: true,
                //     tabBarIcon: ({ focused }) => {
                //         return (

                //             <View style={{ alignItems: 'center' }}>
                //                 <Image
                //                     style={{
                //                         // height: focused ? normalize(20) : normalize(18),
                //                         // width: focused ? normalize(20) : normalize(18),
                //                         height: normalize(22),
                //                         width: normalize(22),
                //                         tintColor: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
                //                     }}
                //                     source={Icons.menu}
                //                     resizeMode="contain"
                //                 />
                //                 <Text style={[{
                //                     fontFamily: Fonts.Inter_Bold,
                //                     fontSize: normalize(11),
                //                     color: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
                //                 }]}>
                //                     Home
                //   </Text>
                //             </View>

                //         );
                //     },
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarBadge: 8,
                    unmountOnBlur: true,
            //         tabBarIcon: ({ focused }) => {
            //             return (
            //                 <View style={{ alignItems: 'center' }}>
            //                     <Image
            //                         style={{
            //                             // height: focused ? normalize(20) : normalize(18),
            //                             // width: focused ? normalize(20) : normalize(18),
            //                             height: normalize(22),
            //                             width: normalize(22),
            //                             tintColor: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
            //                         }}
            //                         source={Icons.menu}
            //                         resizeMode="contain"
            //                     />
            //                     <Text style={[{
            //                         fontFamily: Fonts.Inter_Bold,
            //                         fontSize: normalize(11),
            //                         color: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
            //                     }]}>
            //                         Settings
            //   </Text>
            //                 </View>
            //             )
            //         }
                }}
            />
            <Tab.Screen name="Profile" component={SettingsScreen}
                options={{
                    unmountOnBlur: true,
            //         tabBarIcon: ({ focused }) => {
            //             return (
            //                 <View style={{ alignItems: 'center' }}>
            //                     <Image
            //                         style={{
            //                             // height: focused ? normalize(20) : normalize(18),
            //                             // width: focused ? normalize(20) : normalize(18),
            //                             height: normalize(22),
            //                             width: normalize(22),
            //                             // tintColor: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
            //                         }}
            //                         source={Icons.worker2}
            //                         resizeMode="contain"
            //                     />
            //                     <Text style={[{
            //                         fontFamily: Fonts.Inter_Bold,
            //                         fontSize: normalize(11),
            //                         color: focused ? Colors.white : 'rgba(255, 255, 255, 0.35)'
            //                     }]}>
            //                         Profile
            //   </Text>
            //                 </View>
            //             )
            //         }
                }}
            />
        </Tab.Navigator>

    );
}