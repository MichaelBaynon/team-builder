import React, {useState} from 'react'

const teamMembers = [
    {
        name: 'Michael',
        job: 'Web Dev'    
    },
    {
        name: 'Karen',
        job: 'Sales'
    },
    {
name: 'Nick',
job: 'Marketing'
    },
{
    name: 'Chris',
    job: 'Media'
},
{
    name: 'Sara',
    job: 'Accounting'
}
];



function Form() {
    
    const [inputData, SetInputData] = useState('')
    console.log(inputData)
    
    return (
        <div>
       <form>
           <label>Name</label>
<input 
type='text'
name='name'
placeholder='team members name'
onChange={ (event) => { SetInputData(event.target.value) } }
/>

<label>Email</label>
<input 
type='email'
name='email'
placeholder='email@example.com'
/>

<label>Role</label>
<input 
type='radio'
name='name'
placeholder='role'
/>
<button type='button'>Add Member</button>
       </form>
      
       </div>       
    )
}

export default Form;