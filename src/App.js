import './App.css';
import { Navbar } from './Component/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './components/Profile';
import SignUp from './Component/Signup';
function App() {
  return (
    <div className="bg-black h-screen overflow-hidden w-screen  text-slate-200">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;