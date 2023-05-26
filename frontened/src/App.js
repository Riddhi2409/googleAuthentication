import React from 'react';
import './App.css';
// import Sign from './components/Sign';
import Login from './components/Login';
import { useUserAuth } from './store/AuthContext';

function App() {
  const {user}=useUserAuth();
  if (user){
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
  return (
    <Login />
  )
}

export default App;
