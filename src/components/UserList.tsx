import React from 'react';
import useFetchUsers from '../hooks/useFetchUsers';
import UserTable from './UserTable';

const UserList: React.FC = () => {
    const { users, loading, error } = useFetchUsers();

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading employees...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Error fetching users: {error}
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-inbox display-1 text-muted"></i>
                <p className="mt-3 text-muted">No employees found</p>
            </div>
        );
    }

    return <UserTable users={users} />;
};

export default UserList;