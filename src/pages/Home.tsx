import React from 'react';
import UserList from '../components/UserList';

const Home: React.FC = () => {
    return (
        <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 mb-0">
                    Employee Dashboard
                </h1>
                <button 
                    className="btn btn-primary"
                    onClick={() => window.location.href = '/employee-form'}
                >
                    Add Employee
                </button>
            </div>
            <div className="card shadow">
                <div className="card-body">
                    <UserList />
                </div>
            </div>
        </div>
    );
};

export default Home;