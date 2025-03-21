
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element ={<Home/>} />
              <Route path='/conta/:id' element ={<Conta/>} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
