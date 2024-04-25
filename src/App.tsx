import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import { Header } from './components/Header';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      
        <main>
          <Header />
          <RoutesApp />
        </main>
      
    </BrowserRouter>
  );
};

export default App;
