import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import { FormDoc } from './components/FormDoc';
import Navbar from './components/NavBar';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ItemPage from './pages/ItemPage';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/createuser' element={<FormDoc />} />
          <Route path='/item/:id' element={<ItemPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </MainContextProvider>
  );
}

export default App;
