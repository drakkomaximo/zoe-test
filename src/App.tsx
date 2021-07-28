import React, { Suspense, FC } from 'react';
/* import { ThemeProvider } from 'styled-components'; */
import { GlobalStyle } from './assets/styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './router/protected.routers';
import { MainLoading } from './common/loading/main';

const App:FC = () => {

  return (
    <Suspense fallback={<MainLoading />}>
        <GlobalStyle />
        <BrowserRouter>
          <ProtectedRoutes />
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
