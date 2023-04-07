import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import { FormDoc } from './components/FormDoc';
import { LoginForm } from './components/LoginForm';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ItemPage from './pages/ItemPage';
import MyInventory from './pages/MyInventory';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/myinventory' element={<MyInventory />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/createuser' element={<FormDoc />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/item/:id' element={<ItemPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </MainContextProvider>
  );
}

export default App;
