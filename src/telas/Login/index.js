import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { Input } from '../../componentes/Input';
import estilos from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);

  return (
    <View style={estilos.container}>
      <Input 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={erro}
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        error={erro}
        secureTextEntry
      />
      
      <Botao onPress={() => { setErro(!erro) }}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
