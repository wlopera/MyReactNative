/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';

import GenericModalTimer from './GenericModalTimer';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default ControlTimer = props => {
  const [show, setShow] = useState(true);
  const [init, setInit] = useState(10);
  const [timer, setTimer] = useState(10);
  const [stepValue, setStepValue] = useState('3');

  const [checkList, setCheckList] = useState([
    {
      name: 'step1',
      value: 'Autenticando tu identidad',
      check: true,
    },
    {
      name: 'step2',
      value: 'Token de seguridad generado',
      check: false,
    },
    {
      name: 'step3',
      value: 'Proceso de activación completado',
      check: false,
    },
  ]);

  const handleReset = () => {
    setShow(false); // Oculta el temporizador

    setInit(parseInt(stepValue));
    setTimeout(() => setShow(true), 0); // Vuelve a mostrar el temporizador para reiniciar
  };

  const HandleStepModal = step => {
    setTimer(step);
    console.log('Timer actual: ', step);
  };

  return (
    <>
      {show && (
        <ScrollView style={styles.container}>
          <View
            style={{
              paddingTop: Dimensions.get('window').height / 20,
              backgroundColor: 'white',
            }}>
            <GenericModalTimer
              startPercentage={(10 - init) * 10}
              message="Ventana Modal de BIOMETRICO"
              checkList={checkList}
              onCurrentTimer={HandleStepModal}
            />
            <TextInput
              style={styles.init}
              keyboardType="numeric"
              onChangeText={input => setStepValue(input)}
              value={stepValue}
              placeholder="Valor Inicial"
            />
            <Button onPress={handleReset} title="Iniciar" />
          </View>
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  init: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
