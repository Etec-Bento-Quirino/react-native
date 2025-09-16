import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Switch,
  Slider,
  Alert
} from 'react-native';

/**
 * Exemplo de Componentes de Interface do Usuário
 * Demonstra diferentes componentes nativos do React Native
 */
const ComponentesUI = () => {
  const [texto, setTexto] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [contador, setContador] = useState(0);

  const mostrarAlerta = () => {
    Alert.alert(
      'Informação',
      'Este é um exemplo de Alert nativo!',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK pressionado') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componentes de Interface</Text>

      {/* Seção de Input */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Input de Texto</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite algo aqui..."
          value={texto}
          onChangeText={setTexto}
          multiline
        />
        <Text style={styles.textoDigitado}>
          Texto digitado: {texto || 'Nenhum texto'}
        </Text>
      </View>

      {/* Seção de Switch */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Switch</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Modo escuro: {switchValue ? 'Ativado' : 'Desativado'}
          </Text>
          <Switch
            value={switchValue}
            onValueChange={setSwitchValue}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={switchValue ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Seção de Slider */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Slider</Text>
        <Text style={styles.sliderValue}>Valor: {sliderValue}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#000000"
          thumbStyle={{ backgroundColor: '#007AFF' }}
        />
      </View>

      {/* Seção de Botões */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Botões Interativos</Text>
        
        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={[styles.botao, styles.botaoPrimario]}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.textoBotao}>Incrementar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, styles.botaoSecundario]}
            onPress={() => setContador(contador - 1)}
          >
            <Text style={styles.textoBotao}>Decrementar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.contador}>Contador: {contador}</Text>

        <TouchableOpacity
          style={[styles.botao, styles.botaoAlerta]}
          onPress={mostrarAlerta}
        >
          <Text style={styles.textoBotao}>Mostrar Alerta</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Cards */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Cards de Exemplo</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Card 1</Text>
          <Text style={styles.cardTexto}>
            Este é um exemplo de card com conteúdo e estilo personalizado.
          </Text>
        </View>

        <View style={[styles.card, styles.cardDestaque]}>
          <Text style={styles.cardTitulo}>Card em Destaque</Text>
          <Text style={styles.cardTexto}>
            Este card tem um estilo diferente para chamar atenção.
          </Text>
        </View>
      </View>

      {/* Seção de Lista */}
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Lista de Itens</Text>
        {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
          <View key={index} style={styles.itemLista}>
            <Text style={styles.itemTexto}>{item}</Text>
            <TouchableOpacity style={styles.botaoItem}>
              <Text style={styles.textoBotaoItem}>Ação</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  secao: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  textoDigitado: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botao: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
  },
  botaoPrimario: {
    backgroundColor: '#007AFF',
  },
  botaoSecundario: {
    backgroundColor: '#34C759',
  },
  botaoAlerta: {
    backgroundColor: '#FF3B30',
    alignSelf: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contador: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  cardDestaque: {
    backgroundColor: '#e8f4fd',
    borderLeftColor: '#FF3B30',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardTexto: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  botaoItem: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  textoBotaoItem: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ComponentesUI;
