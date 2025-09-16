import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

/**
 * Primeira Aplicação React Native
 * Exemplo básico de uma aplicação funcional
 */
const PrimeiraApp = () => {
  // Função para mostrar alerta
  const mostrarAlerta = () => {
    Alert.alert(
      'Bem-vindo!',
      'Esta é sua primeira aplicação React Native!',
      [
        { text: 'OK', onPress: () => console.log('Usuário clicou em OK') }
      ]
    );
  };

  // Função para mostrar alerta de confirmação
  const mostrarConfirmacao = () => {
    Alert.alert(
      'Confirmação',
      'Você tem certeza que deseja continuar?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim', onPress: () => console.log('Usuário confirmou') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🌍 Hello World!
      </Text>
      
      <Text style={styles.subtitulo}>
        Sua primeira aplicação React Native
      </Text>
      
      <Text style={styles.descricao}>
        Esta é uma aplicação básica que demonstra os conceitos fundamentais
        do React Native, incluindo componentes, estilos e interações.
      </Text>
      
      <View style={styles.botoes}>
        <TouchableOpacity 
          style={styles.botaoPrimario} 
          onPress={mostrarAlerta}
        >
          <Text style={styles.textoBotaoPrimario}>
            Mostrar Alerta
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.botaoSecundario} 
          onPress={mostrarConfirmacao}
        >
          <Text style={styles.textoBotaoSecundario}>
            Confirmar Ação
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.infoTitulo}>Informações:</Text>
        <Text style={styles.infoTexto}>• Componentes nativos do React Native</Text>
        <Text style={styles.infoTexto}>• Estilos com StyleSheet</Text>
        <Text style={styles.infoTexto}>• Interações com TouchableOpacity</Text>
        <Text style={styles.infoTexto}>• Alertas nativos</Text>
      </View>
    </View>
  );
};

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  botoes: {
    width: '100%',
    marginBottom: 40,
  },
  botaoPrimario: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoSecundario: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
  },
  textoBotaoPrimario: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoBotaoSecundario: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    backgroundColor: '#e8f4fd',
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },
  infoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  infoTexto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default PrimeiraApp;
