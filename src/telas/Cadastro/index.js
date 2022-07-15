import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { Input } from '../../componentes/Input';
import estilos from './estilos';

export default function Cadastro({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
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

      <Input
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        error={erro}
        secureTextEntry
      />
      
      <Botao onPress={() => { setErro(true) }}>CADASTRAR</Botao>
    </View>
  );
}
