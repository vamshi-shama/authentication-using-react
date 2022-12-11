import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './Component/Signup';
import Navbar from './Component/Navbar';
import Profile from './Component/Profile';
function App() {
  return (
    <div className="bg-black h-screen overflow-hidden w-screen  text-slate-200">
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;