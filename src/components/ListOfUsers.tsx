import React from 'react'
import { GET_ALL_USERS, DELETE_USER } from '../graphql/graphql'
import { useMutation, useQuery } from '@apollo/client'

export default function ListOfUsers() {
    const { data , error, loading } = useQuery(GET_ALL_USERS)
    const [deleteUser] = useMutation(DELETE_USER)

    return (
        <div>
            { data && (data?.getAllUsers?.map((user: any) => (
                <div key={ user.id }>
                    { user.name }
                    <button onClick={ () => {deleteUser({ variables: { id: user.id } })} }>Delete User</button>
                </div>
            ))) }
        </div>
    )
}
