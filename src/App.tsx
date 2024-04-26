import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import { Header } from './components/Header';

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
