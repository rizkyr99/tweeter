import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path='/' />
          <Route element={<Explore />} path='/explore' />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
