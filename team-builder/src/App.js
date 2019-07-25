import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {
  
  const [member, setMember] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
       <nav>
         <a href='#'>Home</a>
         <a href='#'>Login</a>
        </nav>
       <h1>Team Builder</h1>
       <Form />
      </header>
    </div>
  );
}

export default App;
