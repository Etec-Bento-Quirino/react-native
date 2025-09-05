import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [historico, setHistorico] = useState([]);

  const incrementar = () => {
    const novoValor = contador + 1;
    setContador(novoValor);
    setHistorico([...historico, `Incrementou para ${novoValor}`]);
  };

  const decrementar = () => {
    const novoValor = contador - 1;
    setContador(novoValor);
    setHistorico([...historico, `Decrementou para ${novoValor}`]);
  };

  const resetar = () => {
    setContador(0);
    setHistorico([...historico, 'Resetou para 0']);
  };

  const limparHistorico = () => {
    setHistorico([]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Contador: {contador}</h2>

      <div style={styles.botoes}>
        <button style={styles.botao} onClick={decrementar}>
          -
        </button>
        <button style={styles.botaoReset} onClick={resetar}>
          Reset
        </button>
        <button style={styles.botao} onClick={incrementar}>
          +
        </button>
      </div>

      <div style={styles.historico}>
        <h3>Histórico:</h3>
        <button style={styles.botaoLimpar} onClick={limparHistorico}>
          Limpar Histórico
        </button>
        <ul style={styles.lista}>
          {historico.map((item, index) => (
            <li key={index} style={styles.itemLista}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  titulo: {
    color: '#333',
    fontSize: 28,
    marginBottom: 20
  },
  botoes: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20
  },
  botao: {
    padding: '10px 20px',
    fontSize: 18,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  botaoReset: {
    padding: '10px 20px',
    fontSize: 18,
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  botaoLimpar: {
    padding: '5px 10px',
    fontSize: 12,
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginBottom: 10
  },
  historico: {
    marginTop: 20,
    textAlign: 'left'
  },
  lista: {
    listStyle: 'none',
    padding: 0
  },
  itemLista: {
    padding: '5px 0',
    borderBottom: '1px solid #eee'
  }
};

export default Contador;
