// DashboardPage.tsx
import React from 'react';
import { useAuth } from '../../components/Authen/AuthContext';

const DashboardPage: React.FC = () => {
    const { token, logout } = useAuth();

    return (
        <div>
            <h1>Welcome, {token}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default DashboardPage;