import {createDrawerNavigator} from '@react-navigation/drawer';
import Demo from '../screens/Main/Home';
import {COLORS} from '../themes/Themes';
import {Image, Platform} from 'react-native';
import Icons from '../themes/Icons';
import normalize from '../utils/helpers/normalize';
import Gallery from '../screens/Main/Gallery';
import AccountHistory from '../screens/Main/AccountHistory';
import Support from '../screens/Main/Support';
import Form from '../screens/Main/Form';
import Files from '../screens/Main/Files';
import News from '../screens/Main/News';
import CustomDrawer from '../components/CustomDrawer';
import React from 'react';
import Bus from '../screens/Main/Bus';

const Drawer = createDrawerNavigator();

const drawerIcon = ({focused, size}, uri) => {
  return (
    <Image
      source={uri}
      style={{width: normalize(20), height: normalize(20)}}
      color={focused ? COLORS.green : COLORS.lightGreen2}
    />
  );
};

const drawerScreens = {
  Home: {
    component: Demo,
    icon: Icons.home,
  },
  Gallery: {
    component: Gallery,
    icon: Icons.gallery,
  },
  AccountHistory: {
    component: AccountHistory,
    icon: Icons.accountHistory,
  },
  Support: {
    component: Support,
    icon: Icons.support,
  },
  News: {
    component: News,
    icon: Icons.news,
  },
  Files: {
    component: Files,
    icon: Icons.file,
  },
  Forms: {
    component: Form,
    icon: Icons.forms,
  },
  Bus: {
    component: Bus,
    icon: Icons.bus,
  },
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Forms"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.darkgreen,
        drawerInactiveBackgroundColor: COLORS.darkgreen,
        drawerActiveTintColor: COLORS.green,
        drawerInactiveTintColor: COLORS.lightGreen2,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: COLORS.darkgreen,
          width: '58%',
        },
        sceneContainerStyle: {
          backgroundColor: COLORS.darkgreen,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {Object.entries({...drawerScreens}).map(
        ([name, {icon, component}], index) => (
          <Drawer.Screen
            key={index}
            name={name}
            options={{
              drawerIcon: options => drawerIcon(options, icon),
            }}
            component={component}
          />
        ),
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
