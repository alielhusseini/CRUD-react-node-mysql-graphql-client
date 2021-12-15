import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from './graphql/graphql'

function App() {
  const [profile, setProfile] = useState({name: "", username: "", password: ""})
  const [createUser, { error }] = useMutation(CREATE_USER, {
    variables: profile,
    update(proxy, result) {
      console.log('inserted')
    }
  })

  const handleChange = e => setProfile({...profile, [e.target.name]: e.target.value})
  console.log(profile)
  return (
    <div className="App">
      <div className="createUser">
        <input onChange={ handleChange } value={ profile.name } type="text" name="name" id="name" placeholder="Name..."/>
        <input onChange={ handleChange } value={ profile.username } type="text" name="username" id="username" placeholder="Username..."/>
        <input onChange={ handleChange } value={ profile.password } type="text" name="password" id="password" placeholder="Password..."/>
        <button onClick={ createUser }>Create User</button>
      </div>
    </div>
  );
}

export default App;
