import React, { Component } from 'react';

class ExemploCicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      carregando: true,
      contador: 0,
      mensagem: 'Componente inicializado'
    };
    console.log('1. Constructor executado');
  }

  componentDidMount() {
    console.log('2. componentDidMount executado');
    this.mensagem = 'Componente montado com sucesso';
    this.carregarDados();
    this.iniciarContador();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('3. componentDidUpdate executado');
    console.log('Estado anterior:', prevState);
    console.log('Estado atual:', this.state);
  }

  componentWillUnmount() {
    console.log('4. componentWillUnmount executado');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  carregarDados = () => {
    this.setState({ mensagem: 'Carregando dados...' });

    setTimeout(() => {
      this.setState({
        dados: [
          { id: 1, nome: 'João Silva', idade: 25 },
          { id: 2, nome: 'Maria Santos', idade: 30 },
          { id: 3, nome: 'Pedro Costa', idade: 28 }
        ],
        carregando: false,
        mensagem: 'Dados carregados com sucesso!'
      });
    }, 2000);
  };

  iniciarContador = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        contador: prevState.contador + 1
      }));
    }, 1000);
  };

  recarregarDados = () => {
    this.setState({
      carregando: true,
      dados: [],
      mensagem: 'Recarregando dados...'
    });
    this.carregarDados();
  };

  render() {
    console.log('5. Render executado');

    return (
      <div style={styles.container}>
        <h2 style={styles.titulo}>Exemplo de Ciclo de Vida</h2>

        <div style={styles.info}>
          <p style={styles.mensagem}>{this.state.mensagem}</p>
          <p style={styles.contador}>Contador: {this.state.contador}s</p>
        </div>

        {this.state.carregando ? (
          <div style={styles.carregando}>
            <div style={styles.spinner}></div>
            <p>Carregando dados...</p>
          </div>
        ) : (
          <div>
            <button style={styles.botao} onClick={this.recarregarDados}>
              Recarregar Dados
            </button>

            <div style={styles.lista}>
              <h3>Lista de Usuários:</h3>
              {this.state.dados.map(usuario => (
                <div key={usuario.id} style={styles.item}>
                  <strong>{usuario.nome}</strong> - {usuario.idade} anos
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={styles.log}>
          <h4>Console Log:</h4>
          <p>Abra o console do navegador para ver os logs do ciclo de vida</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    margin: 10,
    fontFamily: 'Arial, sans-serif'
  },
  titulo: {
    color: '#333',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  info: {
    backgroundColor: '#e9ecef',
    padding: 15,
    borderRadius: 4,
    marginBottom: 20
  },
  mensagem: {
    color: '#495057',
    fontSize: 16,
    margin: '5px 0'
  },
  contador: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: '5px 0'
  },
  carregando: {
    textAlign: 'center',
    padding: 20
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 10px'
  },
  botao: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginBottom: 20
  },
  lista: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 4,
    marginBottom: 20
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  log: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: 15,
    borderRadius: 4,
    fontSize: 14
  }
};

export default ExemploCicloVida;
