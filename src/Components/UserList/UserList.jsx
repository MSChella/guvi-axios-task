import React, { useEffect, useState } from 'react'
import { getUsers, deleteUsers } from '../Services/api';

const UserList = ({ onEdit }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {//async await for asynchronous operation/fetching data from API services

            try {                                   //try..catch for error handling
                //Assume using fetch()= fetch('htttps://.....',get).then((resp)=>resp.json()
                //Axios library has internally performed all above and provided json file.getUsers() fetches and converts to json.
                const response = await getUsers();//store the response (json) in/to a variable.
                setUsers(response.data);//Set the new state to the varaible stored

            } catch (error) {

                console.error('the request has failed:', error);

            }

        }
        fetchUsers();
    }, [])
    const handleEditClick = (user) => {
        // Call the onEdit function with the user(object/useritem) when edit is clicked
        onEdit(user);
    };

    const handleDelete = async (Id) => {   //Every function which involves transaction of data from external services
        // need async await by default. And Try..catch block for error handling default as well

        try {
            await deleteUsers(Id);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== Id));

        } catch (error) {

            console.error('Cannot delete users:', error);

        }


    };

    return (
        <div>
            <h2>User List</h2>
            <ul class="list-group">
                {users.map((user) => (
                    <li class="list-group-item active" aria-current="true" key={user.id} user={user}>
                        Name: {user.name}<br></br>
                        Username: {user.username} <br></br>mail-Id({user.email})
                        <button className='btn btn-secondary px-1 mx-2' onClick={() => handleEditClick(user)}>Edit</button>
                        <button className='btn btn-secondary px-1 mx-2' onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};


export default UserList;
