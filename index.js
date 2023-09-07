// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



/**
 * @format
 */
import React from 'react';
import {AppRegistry,LogBox} from 'react-native';
// import {Provi}
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs()
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
const Altas=()=>{
    return(
      <Provider store={Store}>
          <App/>
      </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Altas);
