import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Exemplo de Componente de Classe
 * Demonstra os conceitos básicos de componentes React Native
 */
class ComponenteBasico extends Component {
  constructor(props) {
    super(props);

    // Estado inicial do componente
    this.state = {
      contador: 0,
      mensagem: 'Olá, React Native!'
    };
  }

  /**
   * Método do ciclo de vida - executado após o componente ser montado
   */
  componentDidMount() {
    console.log('Componente montado com sucesso!');
  }

  /**
   * Método do ciclo de vida - executado quando o componente é atualizado
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log(`Contador atualizado: ${this.state.contador}`);
    }
  }

  /**
   * Método para incrementar o contador
   */
  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  /**
   * Método para decrementar o contador
   */
  decrementarContador = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  };

  /**
   * Método para resetar o contador
   */
  resetarContador = () => {
    this.setState({
      contador: 0
    });
  };

  /**
   * Método de renderização obrigatório
   */
  render() {
    const { titulo, cor } = this.props;
    const { contador, mensagem } = this.state;

    return (
      <View style={[styles.container, { backgroundColor: cor }]}>
        <Text style={styles.titulo}>{titulo || 'Componente Básico'}</Text>

        <Text style={styles.mensagem}>{mensagem}</Text>

        <Text style={styles.contador}>Contador: {contador}</Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={this.incrementarContador}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={this.decrementarContador}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.resetarContador}>
            <Text style={styles.textoBotao}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  mensagem: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666'
  },
  contador: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007AFF'
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center'
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ComponenteBasico;
