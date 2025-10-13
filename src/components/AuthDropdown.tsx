// components/AuthDropdown.tsx
import { useState } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

export default function AuthDropdown() {
    const [open, setOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('authToken'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setLoggedIn(false);
    };

    return (
        <div className="absolute top-4 right-4">
            <img
                src="/avatar.svg"
                alt="User"
                className="w-8 h-8 cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div className="bg-white shadow-lg p-4 rounded w-64">
                    {loggedIn ? (
                        <button onClick={handleLogout} className="text-red-500">Logout</button>
                    ) : (
                        <LoginForm onLogin={() => setLoggedIn(true)} />
                    )}
                </div>
            )}
        </div>
    );
}
