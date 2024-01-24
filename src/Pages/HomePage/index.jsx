import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../../Components/UserList/UserList'
import UserEditForm from '../../Components/UserForm/UserEditForm'



const HomePage = () => {
    const [editingUser, setEditingUser] = useState(null);

    const handleEditUser = (user) => {
        setEditingUser(user);
    };

    const handleSave = () => {
        setEditingUser(null);
    };

    return (

        <div>
            <UserList onEdit={handleEditUser} />
            <UserEditForm onSave={handleSave} userToEdit={editingUser} />
        </div>
    );
};
export default HomePage
