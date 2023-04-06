import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ItemPage from './pages/ItemPage';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <Routes>
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/item/:id' element={<ItemPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </MainContextProvider>
  );
}

export default App;
