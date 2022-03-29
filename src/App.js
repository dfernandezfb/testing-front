import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProvider from './context/UserContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
