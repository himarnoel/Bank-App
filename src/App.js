import './App.css';
import React from 'react';
import ResponsiveDrawer from './components/drawer';
import Dashboard from './pages/Dasboard';
import {Routes, Route} from  'react-router-dom'
import {Navigate} from  'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
function App() {
  return (
    <div className="App">    

<Routes>
<Route path="/" element={<Signup/>} />
<Route path="/Signin" element={<Signin/>} />
<Route path="/home" element={<ResponsiveDrawer/>} />
  <Route path="*" element={<Navigate to="/home"/>} />
</Routes>
    </div>
  );
}

export default App;
