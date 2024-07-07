function isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  
  function login(username, password) {
    // Запрос на сервер для авторизации
    // В реальном приложении здесь должен быть запрос к API 
    // с данными username и password. 
    // Пример с использованием фейкового API:
    const fakeApiToken = 'your_fake_token'; 
  
    // Проверка данных и выдача токена (в реальном API будет
    // проверка на сервере)
    if (username === 'user' && password === 'password') {
      localStorage.setItem('token', fakeApiToken);
      return true;
    } else {
      return false;
    }
  }
  
  function logout() {
    localStorage.removeItem('token');
  }
  
  export default {
    isAuthenticated,
    login,
    logout,
  };