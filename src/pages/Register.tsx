// pages/Register.tsx
import { useState } from 'react';
import { n8n_CONFIG } from '@/config/globals';

export default function Register() {
    const [showPwd, setShowPwd] = useState(false);
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleRegister = async () => {
        await fetch(n8n_CONFIG.registerurl, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        });
        alert('Registered!');
    };

    return (
        <div className="max-w-md mx-auto mt-10 space-y-4">
            <input type="text" placeholder="First Name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full border p-2" />
            <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full border p-2" />
            <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border p-2" />
            <div className="relative">
                <input type={showPwd ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border p-2 pr-10" />
                <span className="absolute right-2 top-2 cursor-pointer" onClick={() => setShowPwd(!showPwd)}>👁️</span>
            </div>
            <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
        </div>
    );
}
