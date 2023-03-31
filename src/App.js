
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import RoutePage from './Route/RoutePage';

function App() {
  return (
   <>
    <BrowserRouter>
    <RoutePage />
    </BrowserRouter>
   </>
  );
}

export default App;
