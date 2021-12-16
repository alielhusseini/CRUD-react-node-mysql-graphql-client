import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../graphql/graphql' 

export default function UpdatePassword() {
    const [updateFields, setUpdateFields] = useState({username: "", oldPassword: "", newPassword: ""})
    const [updatePassword] = useMutation(UPDATE_PASSWORD, {
        variables: updateFields,
        update(proxy, result) {
            setUpdateFields({username: "", oldPassword: "", newPassword: ""})
        }
    })
    const handleChange = (e:any) => setUpdateFields({...updateFields, [e.target.name]: e.target.value})

    return (
        <div>
            <input onChange={ handleChange } value={ updateFields.username } type="text" name="username" id="username" placeholder="Userame..."/>
            <input onChange={ handleChange } value={ updateFields.oldPassword } type="password" name="oldPassword" id="oldPassword" placeholder="Old Password..."/>
            <input onChange={ handleChange } value={ updateFields.newPassword } type="password" name="newPassword" id="newPassword" placeholder="New Password..."/> 
            <button onClick={() => {updatePassword()}}>Update Password</button>
        </div>
    )
}
