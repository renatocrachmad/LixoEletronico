export const isAuthenticated = () => {
    // Aqui, você pode verificar a autenticação armazenada no localStorage, cookies ou em um estado global (ex: Redux)
    return localStorage.getItem('userToken') !== null; // Exemplo usando token armazenado no localStorage
  };
  