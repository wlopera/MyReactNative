import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TextInputScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailHandler = text => {
    setEmail(text);
  };

  const changePasswordHandler = text => {
    setPassword(text);
  };

  const login = () => {
    alert(JSON.stringify({Correo: email, Contraseña: password}));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Correo"
        placeholderTextColor="white"
        autoCapitalize="none"
        backgroundColor="green"
        onChangeText={changeEmailHandler}
        color="white"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Contraseña"
        placeholderTextColor="white"
        autoCapitalize="none"
        backgroundColor="green"
        onChangeText={changePasswordHandler}
        color="white"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => login()}>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#1f094d',
    fontSize: 18,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
