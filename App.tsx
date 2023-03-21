/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//Components added from internal
import Devices from './Components/DeviceScreen';
import Home from './Components/HomeScreen';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={'Home'} component={Home} />
          <Tab.Screen name={'Devices'} component={Devices} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  containerrow: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  containercol: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  touchablesimp: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default App;
