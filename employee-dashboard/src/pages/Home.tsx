import React from 'react';
import UserList from '../components/UserList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Employee Dashboard</h1>
            <UserList />
        </div>
    );
};

export default Home;