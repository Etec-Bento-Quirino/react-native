// Teste simples para verificar se o Jest está funcionando
describe('Exemplo de Teste', () => {
  it('deve somar dois números corretamente', () => {
    expect(2 + 2).toBe(4);
  });

  it('deve verificar se uma string contém texto', () => {
    expect('React Native').toContain('React');
  });

  it('deve verificar se um array contém elementos', () => {
    const frutas = ['maçã', 'banana', 'laranja'];
    expect(frutas).toContain('banana');
  });
});
