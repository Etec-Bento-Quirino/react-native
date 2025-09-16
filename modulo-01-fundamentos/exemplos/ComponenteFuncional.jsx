import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Exemplo de Componente Funcional com Hooks
 * Demonstra o uso de useState e useEffect
 */
const ComponenteFuncional = ({ titulo, cor = '#f0f0f0' }) => {
  // Hook useState para gerenciar estado
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('Componente funcional ativo!');
  const [usuario, setUsuario] = useState(null);

  // Hook useEffect para efeitos colaterais
  useEffect(() => {
    console.log('Componente funcional montado!');

    // Simulação de carregamento de dados
    setTimeout(() => {
      setUsuario({
        nome: 'João Silva',
        email: 'joao@exemplo.com'
      });
    }, 1000);

    // Função de limpeza (equivalente ao componentWillUnmount)
    return () => {
      console.log('Componente funcional desmontado!');
    };
  }, []); // Array vazio = executa apenas uma vez

  // useEffect que executa quando contador muda
  useEffect(() => {
    if (contador > 0) {
      setMensagem(`Contador atualizado: ${contador}`);
    }
  }, [contador]); // Executa quando contador muda

  // Funções para manipular o estado
  const incrementar = () => {
    setContador(prev => prev + 1);
  };

  const decrementar = () => {
    setContador(prev => prev - 1);
  };

  const resetar = () => {
    setContador(0);
    setMensagem('Contador resetado!');
  };

  // Função para alterar a mensagem
  const alterarMensagem = () => {
    const mensagens = [
      'React Native é incrível!',
      'Hooks tornam o código mais limpo',
      'Componentes funcionais são poderosos',
      'useState e useEffect são essenciais'
    ];

    const mensagemAleatoria =
      mensagens[Math.floor(Math.random() * mensagens.length)];
    setMensagem(mensagemAleatoria);
  };

  return (
    <View style={[styles.container, { backgroundColor: cor }]}>
      <Text style={styles.titulo}>{titulo || 'Componente Funcional'}</Text>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <Text style={styles.contador}>Contador: {contador}</Text>

      {usuario && (
        <View style={styles.usuario}>
          <Text style={styles.usuarioTitulo}>Usuário Carregado:</Text>
          <Text style={styles.usuarioNome}>{usuario.nome}</Text>
          <Text style={styles.usuarioEmail}>{usuario.email}</Text>
        </View>
      )}

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoMensagem} onPress={alterarMensagem}>
        <Text style={styles.textoBotao}>Alterar Mensagem</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic'
  },
  contador: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF'
  },
  usuario: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  usuarioTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5
  },
  usuarioNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  usuarioEmail: {
    fontSize: 14,
    color: '#666'
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center'
  },
  botaoMensagem: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ComponenteFuncional;
