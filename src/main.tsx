import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './components/App/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
