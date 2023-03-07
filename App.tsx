/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type TouchableProps = {
  ButtonText: string;
};

function Boxbutton(props: TouchableProps): JSX.Element {
  return (
    <TouchableHighlight style={styles.container} underlayColor="#FF1694">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.ButtonText}</Text>
      </View>
    </TouchableHighlight>
  );
}
function Childbox(props): JSX.Element {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      {props.left}
      {props.right}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Homecomp(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Childbox
            left={<Boxbutton ButtonText="Hello" />}
            right={<Boxbutton ButtonText="Goodbye" />}
          />
          <Childbox
            left={<Boxbutton ButtonText="Hello Again" />}
            right={<Boxbutton ButtonText="Goodbye Again" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homecomp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
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
