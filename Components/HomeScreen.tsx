import {StyleSheet, View} from 'react-native';
import React from 'react';
import Boxbutton from './Boxbutton';
import {Childbox} from './Boxbutton';

function Home(): JSX.Element {
  return (
    <View>
      <Childbox
        left={<Boxbutton ButtonText="Hello" />}
        right={<Boxbutton ButtonText="Goodbye" />}
      />
      <Childbox
        left={<Boxbutton ButtonText="Hello Again" />}
        right={<Boxbutton ButtonText="Goodbye Again" />}
      />
    </View>
  );
}

export default Home;

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
