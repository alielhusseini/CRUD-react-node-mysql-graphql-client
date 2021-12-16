import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/graphql'

export default function CreateUser() {
    const [profile, setProfile] = useState({name: "", username: "", password: ""})
    
    const [createUser, { error }] = useMutation(CREATE_USER, {
        variables: profile,
        update(proxy, result) {
            // console.log(result.data)
            setProfile({name: "", username: "", password: ""})
        }
    })

    const handleChange = (e:any) => setProfile({...profile, [e.target.name]: e.target.value})

    if (error) return <h1>Sorry something went wrong...Refresh the page</h1>

    return (
        <div className="createUser">
            <input onChange={ handleChange } value={ profile.name } type="text" name="name" id="name" placeholder="Name..."/>
            <input onChange={ handleChange } value={ profile.username } type="text" name="username" id="username" placeholder="Username..."/>
            <input onChange={ handleChange } value={ profile.password } type="text" name="password" id="password" placeholder="Password..."/>
            <button onClick={ () => {createUser()} }>Create User</button>
        </div>
    )
}
