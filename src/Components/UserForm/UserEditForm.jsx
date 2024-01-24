

import React, { useEffect, useState } from 'react';
import { addUsers, editUsers } from '../Services/api';

const UserEditForm = ({ onSave, userToEdit }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });// or(userToEdit || {}) 

    useEffect(() => {
        // Set the form data when the userToEdit prop changes
        setFormData(userToEdit || { name: '', email: '' });
    }, [userToEdit]);

    const handleChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (userToEdit) {
                await editUsers(userToEdit.id, formData);
            } else {
                await addUsers(formData);
            }
            onSave();
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };


    return (
        <div>
            <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <button type="submit">{userToEdit ? 'Save Changes' : 'Add User'}</button>
            </form>
            <ul>

                Name: {formData.name}<br></br>
                Username: {formData.username} <br></br>mail-Id:({formData.email})


            </ul>
        </div>
    );
}

export default UserEditForm;

