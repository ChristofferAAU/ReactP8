import 'react-native-gesture-handler';
import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const Dummy = [{id: '1', title: 'Item one'}];

type Itemprops = {title: string};

const ListItem = ({title}: Itemprops) => (
  <View style={styles.listItem}>
    <Text>{title}</Text>
  </View>
);

function buttonPress() {
  Alert.alert('A Button was pressed');
}
function Production(): JSX.Element {
  return (
    <View style={styles.containercol}>
      <Text>Production Screen</Text>
      <FlatList
        data={Dummy}
        renderItem={({item}) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
      />
      <TouchableHighlight
        onPress={buttonPress}
        style={styles.touchablesimp}
        underlayColor="#FF1694">
        <View style={styles.button}>
          <Text>Dette bør ikke virke</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default Production;

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
    alignItems: 'center',
  },
  button: {
    margin: 5,
    flex: 0.5,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  listItem: {
    textAlign: 'center',
    backgroundColor: '#74f74f',
    width: '50%',
  },
});
