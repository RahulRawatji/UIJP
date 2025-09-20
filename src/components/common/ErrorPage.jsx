import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa',
            color: '#333'
        }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <button
                style={{
                    padding: '10px 20px',
                    marginTop: '20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#007bff',
                    color: '#fff'
                }}
                onClick={() => navigate('/')}
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorPage;