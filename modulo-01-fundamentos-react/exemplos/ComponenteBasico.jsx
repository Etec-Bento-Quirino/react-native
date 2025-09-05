import React from 'react';

const Saudacao = ({ nome, idade }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Olá, {nome}!</h1>
      <p style={styles.paragrafo}>Você tem {idade} anos.</p>
      <p style={styles.paragrafo}>
        {idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade'}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
    textAlign: 'center'
  },
  titulo: {
    color: '#333',
    fontSize: 24,
    marginBottom: 10
  },
  paragrafo: {
    color: '#666',
    fontSize: 16,
    margin: 5
  }
};

export default Saudacao;
