import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, Selectors } from './ReduxStore';

/**
 * Exemplo de React-Redux
 * Demonstra como conectar componentes React ao Redux store
 */

// ===== COMPONENTE CONECTADO - CONTADOR =====
class ContadorRedux extends Component {
  render() {
    const { count, lastAction, increment, decrement, reset, setValue } = this.props;
    
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Contador com Redux</Text>
        
        <Text style={styles.contador}>Count: {count}</Text>
        <Text style={styles.ultimaAcao}>Última ação: {lastAction || 'Nenhuma'}</Text>
        
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={increment}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botao} onPress={decrement}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botao} onPress={reset}>
            <Text style={styles.textoBotao}>Reset</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.botaoEspecial} 
          onPress={() => setValue(Math.floor(Math.random() * 100))}
        >
          <Text style={styles.textoBotao}>Valor Aleatório</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Map state to props
const mapStateToContadorProps = (state) => ({
  count: Selectors.getCounter(state),
  lastAction: Selectors.getLastAction(state),
});

// Map dispatch to props
const mapDispatchToContadorProps = (dispatch) => ({
  increment: () => dispatch(Actions.increment()),
  decrement: () => dispatch(Actions.decrement()),
  reset: () => dispatch(Actions.reset()),
  setValue: (value) => dispatch(Actions.setValue(value)),
});

// Conectar componente ao Redux
const ContadorConectado = connect(
  mapStateToContadorProps,
  mapDispatchToContadorProps
)(ContadorRedux);

// ===== COMPONENTE CONECTADO - USUÁRIO =====
class UsuarioRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleLogin = () => {
    const { nome, email } = this.state;
    if (nome && email) {
      this.props.login({
        nome,
        email,
        profile: {
          avatar: 'https://via.placeholder.com/100',
          bio: 'Usuário do React Native',
        },
      });
      this.setState({ nome: '', email: '' });
    }
  };

  handleLogout = () => {
    this.props.logout();
  };

  handleUpdateProfile = () => {
    this.props.updateProfile({
      bio: `Bio atualizada em ${new Date().toLocaleTimeString()}`,
    });
  };

  render() {
    const { user, isLoggedIn, profile } = this.props;
    const { nome, email } = this.state;

    if (isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Usuário Logado</Text>
          
          <View style={styles.usuarioCard}>
            <Text style={styles.usuarioNome}>{user.nome}</Text>
            <Text style={styles.usuarioEmail}>{user.email}</Text>
            {profile && (
              <Text style={styles.usuarioBio}>{profile.bio}</Text>
            )}
          </View>
          
          <TouchableOpacity style={styles.botao} onPress={this.handleUpdateProfile}>
            <Text style={styles.textoBotao}>Atualizar Perfil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botaoLogout} onPress={this.handleLogout}>
            <Text style={styles.textoBotao}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => this.setState({ nome: text })}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TouchableOpacity 
          style={[styles.botao, !nome || !email ? styles.botaoDisabled : null]} 
          onPress={this.handleLogin}
          disabled={!nome || !email}
        >
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Map state to props
const mapStateToUsuarioProps = (state) => ({
  user: Selectors.getUser(state),
  isLoggedIn: Selectors.isLoggedIn(state),
  profile: Selectors.getUserProfile(state),
});

// Map dispatch to props
const mapDispatchToUsuarioProps = (dispatch) => ({
  login: (userData) => dispatch(Actions.login(userData)),
  logout: () => dispatch(Actions.logout()),
  updateProfile: (profileData) => dispatch(Actions.updateProfile(profileData)),
});

// Conectar componente ao Redux
const UsuarioConectado = connect(
  mapStateToUsuarioProps,
  mapDispatchToUsuarioProps
)(UsuarioRedux);

// ===== COMPONENTE PRINCIPAL =====
class AppReactRedux extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.appTitulo}>React-Redux Demo</Text>
        
        <ContadorConectado />
        
        <View style={styles.separador} />
        
        <UsuarioConectado />
      </View>
    );
  }
}

// Estilos
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  appTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  container: {
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  contador: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 10,
  },
  ultimaAcao: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  botaoEspecial: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoLogout: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoDisabled: {
    backgroundColor: '#ccc',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  usuarioCard: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  usuarioNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  usuarioEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  usuarioBio: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  separador: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});

export { ContadorConectado, UsuarioConectado };
export default AppReactRedux;
