import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClientProvider } from 'react-query';
import GlobalStyle from './GlobalStyle';
import { queryClient } from './services/fetchApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
