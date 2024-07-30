import React from 'react';
import {View, StyleSheet} from 'react-native';

const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redbox} />
      <View style={styles.bluebox} />
      <View style={styles.blackbox} />
    </View>
  );
};

export default FlexBoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 10,
    marginLeft: 10,
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  },
});
