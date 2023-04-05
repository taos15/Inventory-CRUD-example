import Home from './pages/Home';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  );
}

export default App;
