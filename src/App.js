import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProvider from './context/UserContext';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute> }/>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
