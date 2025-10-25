import React from 'react';
import useFetchUsers from '../hooks/useFetchUsers';
import UserTable from './UserTable';

const UserList: React.FC = () => {
    const { users, loading, error } = useFetchUsers();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching users: {error.message}</div>;
    }

    return (
        <div>
            <h2>User List</h2>
            <UserTable users={users} />
        </div>
    );
};

export default UserList;