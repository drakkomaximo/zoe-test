import { Suspense, FC, useState } from 'react';
/* import { ThemeProvider } from 'styled-components'; */
import { GlobalStyle } from './assets/styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './router/protected.routers';
import { MainLoading } from './common/loading/main';
import { ListContext } from './context/ListContext';

const App:FC = () => {

  const [listSearched, setlistSearched] = useState<any>([/* {
    id: 1,
    name: "Michael",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    income: 85273
  } */])
  const [valueSearched, setValueSearched] = useState<number | ''>('')
  const [count, setCount] = useState<number>(3)
  const [addrtype, setAddrType] = useState('')

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
