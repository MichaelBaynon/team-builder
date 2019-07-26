import React, {useState} from 'react'

// const teamMembers = [
//     {
//         name: 'Michael',
//         job: 'Web Dev'    
//     },
//     {
//         name: 'Karen',
//         job: 'Sales'
//     },
//     {
// name: 'Nick',
// job: 'Marketing'
//     },
// {
//     name: 'Chris',
//     job: 'Media'
// },
// {
//     name: 'Sara',
//     job: 'Accounting'
// }
// ];

const Member = props => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        role: '',
        id: null 
    })


const inputHandler = e => {
    console.log('target name', e.target.name)
    console.log('value', e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value });
    
}

const submitHandler = e => {
    e.preventDefault()
    props.add({ ...input, id: Math.random() })
    setInput({
        name: "",
        email: "",
        role: "",
        id: null
    })
}

 return (
        
       <form onSubmit={submitHandler}>
           <h1>Add Member</h1>
           <div>
<label htmlFor='Name'>
    Name:{' '}
    <input
    type='text'
    value={input.name}
    onChange={inputHandler}
    name='name'
    />
</label>
<label htmlFor='Email'>
    Email: {' '}
    <input
    type='email'
    value={input.email}
    onChange={inputHandler}
    name='email'
    />
</label>
<label htmlFor='Role'>
    Role: {' '}
    <input
    type='text'
    value={input.role}
    onChange={inputHandler}
    name='role'
    />

</label>

           </div>
           <button>Add Member</button>
           </form>
    )


}

export default Member;