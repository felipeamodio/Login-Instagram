import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFFFF" translucent={false} />
          <Image 
            source={require('./src/img/logo.png')}
            style={styles.logo}
          />

          <TextInput 
            placeholder="Celular, username ou e-mail"
            style={styles.input}
          />

          <TextInput 
            placeholder="Sua senha"

            style={styles.input}
          />

          <View style={styles.forgotPwd}>
            <TouchableOpacity>
              <Text style={styles.forgotPwdText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFacebook}>
            <FontAwesome5 name="facebook" size={25} color="#399FFF" />
            <Text style={styles.facebookText}>Continue como Felipe</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
              <Text style={{marginHorizontal: '3%'}}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signupTextButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: Platform.OS === 'ios' ? '20%' : '13%',
    marginBottom: Platform.OS === 'ios' ? '15%' : '13%'
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#E9E9E9',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC'
  },
  forgotPwd: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotPwdText: {
    color: '#399FFF',
    fontWeight: '600'
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700'
  },
  btnFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '18%'
  },
  facebookText: {
    color: '#399FFF',
    fontWeight: '600',
    paddingLeft: 8,
    fontSize: 15
  },
  divisor: {
    marginTop: '18%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#C4C4C4',
    borderRadius: 5
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: '18%'
  },
  signupText: {
    color: '#979797',
    fontWeight: '600',
    paddingRight: 5
  },
  signupTextButton: {
    color: '#399FFF',
    fontWeight: 'bold'
  }
});
