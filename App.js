import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import fechado from './src/assets/biscoito.png'
import aberto from './src/assets/biscoitoAberto.png'

export default function App() {

  const [frases, setFrases] = useState('')
  const [img, setImg] = useState(fechado)

  function handleClick() {

    let frases = [
      'Voce terá um bom dia 😀',
      'Amanha voce ganhara na MEGA SENA 🤑',
      'Sua esposa está gravida !!! 🥰',
      'Você é um cara de Sorte! (☞ﾟヮﾟ)☞',
    ]

    let aleatorio = Math.floor(Math.random() * frases.length)

    setFrases(frases[aleatorio])
    setImg(aberto)


  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{frases}</Text>

      <TouchableOpacity style={styles.botao} onPress={()=> handleClick()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 50
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});
