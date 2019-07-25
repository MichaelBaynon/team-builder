import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'



function App() {
  
  const [members, setMembers] = useState([]);
  
const submitMember = member => setMembers([...members, member])
const update = uMember => 
setMembers([
  ...members.map(member => {
    if(member.id === uMember.id) {
      return uMember
    }
    return member
  })
])


  return (
    <div className="App">
      <header className="App-header">
       <nav>
         <a href='#'>Home</a>
         <a href='#'>Login</a>
        </nav>
        <div className='sideNav'>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
          <a className='sideNavItem'>example</a>
      </div>
       <h1>Team Builder</h1>
       </header>
       <div>
       {members.map((member, i) => (
        <Member member={member} key={i} update={update} />
      ))}
      <Form add={submitMember} />
      </div>
    </div>
    
      
    
  );
}

export default App;
