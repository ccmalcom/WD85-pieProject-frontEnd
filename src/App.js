import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from '../src/components/Auth/Auth';
import Pies from './components/Pies/Pies'

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    };
  });

  const updateLocalStorage = newToken =>{
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearLocalStorage = () =>{
    localStorage.clear();
    setSessionToken(undefined)
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Pies sessionToken={sessionToken}/> : 
    <Auth updateLocalStorage={updateLocalStorage}/>
  }
  return (
    <div className="App">
      <Navbar clearSession={clearLocalStorage} />
      {viewConductor()}
    </div>
  );
}

export default App;
