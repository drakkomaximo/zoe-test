import { Suspense, FC, useState } from 'react';
/* import { ThemeProvider } from 'styled-components'; */
import { GlobalStyle } from './assets/styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './router/protected.routers';
import { MainLoading } from './common/loading/main';
import { ListContext } from './context/ListContext';

const App:FC = () => {

  const [listSearched, setlistSearched] = useState<any>([])
  const [valueSearched, setValueSearched] = useState<number | ''>('')
  const [count, setCount] = useState<number>(3)
  const [addrtype, setAddrType] = useState('Select…')
  const [internalLabel, setInternalLabel] = useState('Select...')

  return (
    <Suspense fallback={<MainLoading />}>
        <ListContext.Provider 
          value={
            {
              listSearched,
              setlistSearched,
              valueSearched,
              setValueSearched,
              count,
              setCount,
              addrtype,
              setAddrType,
              internalLabel, 
              setInternalLabel
              }}>
        <GlobalStyle />
        <BrowserRouter>
          <ProtectedRoutes />
        </BrowserRouter>
        </ListContext.Provider>
    </Suspense>
  );
}

export default App;
