import { useState } from 'react';
import { n8n_CONFIG } from '@/config/globals';
import bcrypt from 'bcryptjs';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function LoginForm({
    onLogin,
    onForgotPassword,
}: {
    onLogin: () => void;
    onForgotPassword: () => void;
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);


    const handleLogin = async () => {
        console.log('Login button clicked');

        console.log('Logging in with', { email, password });
        const res = await fetch(n8n_CONFIG.loginurl, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data.message === 'fail') {
            alert('User not found. Please check your email or register.');
            return;
        }
        console.log('Login response:', data);
        const isMatch = await bcrypt.compare(password, data.password);
        if (isMatch) {
            console.log('Password match. Login successful.');
            localStorage.setItem('authToken', data.UserId);
            onLogin();
        } else {
            alert('Incorrect password. Please try again.');
        }
    };
    return (
        <div className="space-y-2">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
            />
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">
                Login
            </button>
            <button onClick={onForgotPassword} className="text-sm text-blue-500 underline">
                Forgot Password?
            </button>


        </div>
    );
}
