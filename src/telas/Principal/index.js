import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import { auth } from '../../config/firebase';
import estilos from './estilos';

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  return (
    <View style={estilos.container}>
      <Cabecalho navigation={navigation} />
      <Text style={estilos.texto}>Usuário: {usuario?.email}</Text>

      <Produto nome="Notebook" preco="2.000,00" />
      <Produto nome="Smartphone" preco="1.000,00" />
      <Produto nome="Tablet" preco="3.000,00" />
     </View>
  );
}
