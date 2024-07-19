import { useState } from 'react';

const ProfileEdit = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/user/${user.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('Profile updated successfully');
        } else {
            alert('Failed to update profile');
        }
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProfileEdit;
