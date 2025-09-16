import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Aplicação Expo - Exemplo de estrutura completa
 * Demonstra como usar o Expo para desenvolvimento rápido
 */
const AppExpo = () => {
  const [contador, setContador] = useState(0);
  const [tema, setTema] = useState('claro');

  // Alternar entre temas claro e escuro
  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  // Incrementar contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Decrementar contador
  const decrementar = () => {
    setContador(Math.max(0, contador - 1));
  };

  // Resetar contador
  const resetar = () => {
    setContador(0);
  };

  // Definir estilos baseado no tema
  const isTemaEscuro = tema === 'escuro';
  const cores = {
    fundo: isTemaEscuro ? '#1a1a1a' : '#ffffff',
    texto: isTemaEscuro ? '#ffffff' : '#333333',
    textoSecundario: isTemaEscuro ? '#cccccc' : '#666666',
    primario: '#007AFF',
    secundario: isTemaEscuro ? '#5856d6' : '#34c759',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: cores.fundo }]}>
      <StatusBar 
        barStyle={isTemaEscuro ? 'light-content' : 'dark-content'}
        backgroundColor={cores.fundo}
      />
      
      <View style={styles.header}>
        <Text style={[styles.titulo, { color: cores.texto }]}>
          📱 App Expo
        </Text>
        <Text style={[styles.subtitulo, { color: cores.textoSecundario }]}>
          Desenvolvimento rápido com Expo
        </Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.card}>
          <Text style={[styles.cardTitulo, { color: cores.texto }]}>
            Contador Interativo
          </Text>
          <Text style={[styles.contador, { color: cores.primario }]}>
            {contador}
          </Text>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity 
            style={[styles.botao, { backgroundColor: cores.primario }]}
            onPress={incrementar}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.botao, { backgroundColor: cores.secundario }]}
            onPress={decrementar}
            disabled={contador === 0}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.botao, styles.botaoReset]}
            onPress={resetar}
            disabled={contador === 0}
          >
            <Text style={[styles.textoBotao, { color: '#ff3b30' }]}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[styles.botaoTema, { backgroundColor: cores.primario }]}
          onPress={alternarTema}
        >
          <Text style={styles.textoBotao}>
            {isTemaEscuro ? '☀️ Tema Claro' : '🌙 Tema Escuro'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerTexto, { color: cores.textoSecundario }]}>
          Plataforma: {Platform.OS}
        </Text>
        <Text style={[styles.footerTexto, { color: cores.textoSecundario }]}>
          Versão: {Platform.Version}
        </Text>
        <Text style={[styles.footerTexto, { color: cores.textoSecundario }]}>
          Desenvolvido com ❤️ usando Expo
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  contador: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  botao: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoReset: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ff3b30',
  },
  botaoTema: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerTexto: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default AppExpo;
