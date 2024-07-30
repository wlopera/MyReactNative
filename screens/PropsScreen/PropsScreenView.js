import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

/**
 * Componente Contenedor. Este componente maneja el estado y pasa los accesorios
 * al componente de presentacion
 **/
const PropsScreen = ({value, onUpdate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>React Native - Props</Text>
      </View>
      <View style={styles.textView}>
        <Text
          style={styles.text}
          onPress={() => {
            onUpdate(value);
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default PropsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleView: {backgroundColor: 'red', alignItems: 'center'},
  title: {color: 'white', fontSize: 25, fontWeight: 'bold'},
  textView: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    textAlign: 'justify',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
