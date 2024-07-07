import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct'; // Опционально
import auth from './services/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(auth.isAuthenticated());
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    auth.logout();
    setIsAuthenticated(false);
  };

  return (
    <Provider store={store}>
      <div>
        {isAuthenticated ? (
          <div>
            <h1>Каталог продуктов</h1>
            <AddProduct />
            <ProductList />
            {/* <EditProduct /> - если есть компонент редактирования */}
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <div>
            <h2>Вход</h2>
            <button onClick={handleLogin}>Войти</button>
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;