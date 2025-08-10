import React from 'react'
const UserList  = () => {
    const user = [
        {id: 1, name: 'Ammar', age: 23},
        {id: 2, name: 'Daniyal', age: 20},
        {id:3, name: 'Salaaar', age:19}
    ];
    return (
        <div>
            {user.map(users => (
                <div key={users.id}> 
                <h1>Name: {users.name}</h1>
                <h1>Age: {users.age}</h1>

                


                </div>
            ))}
        </div>
    )
}

export default UserList;