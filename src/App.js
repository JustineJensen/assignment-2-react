import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import UserProfile from './views/ProfilePage';
import StartPage from './views/StartupPage';
import TranslationPage from './views/TranslationPage';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <StartPage/> } /> 
        <Route path="/translation" element={ <TranslationPage /> } />
        <Route path="/profile" element={ <UserProfile /> } />
      
      </Routes>
      
    </div>
    </BrowserRouter>

    
  );
}

export default App;
