import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProvider from './context/UserContext';
import AdminPage from './pages/AdminPage';
import FavsPage from './pages/FavsPage';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<PublicRoute><LandingPage/></PublicRoute>}/>
          <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
          <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute> }/>
          <Route path='/favs' element={<PrivateRoute><FavsPage/></PrivateRoute> }/>
          <Route path='/admin' element={<PrivateRoute><AdminPage/></PrivateRoute> }/>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
