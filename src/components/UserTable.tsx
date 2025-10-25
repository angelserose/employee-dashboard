import React from 'react';
import { User } from '../types';

interface UserTableProps {
    users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <a href={`mailto:${user.email}`} className="text-decoration-none">
                                    {user.email}
                                </a>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary me-2">
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;