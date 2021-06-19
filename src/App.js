import './App.css';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import Search from './components/Search'
import Authentication from './components/Authentication';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  
  const [loginState, setLoginState] = useState(false)

  return (
    <div>
        {/* {localStorage.clear()} */}
        { localStorage.getItem('status') ? <Search setLoginState={setLoginState} user={JSON.parse(localStorage.getItem('user'))} />: <Authentication setLoginState={setLoginState} />}
    </div>
  );
}

export default App;
