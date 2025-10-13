import { useState } from 'react';
import { n8n_CONFIG } from '@/config/globals';

export default function ForgotPasswordForm({ onClose }: { onClose: () => void }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

    const handleSubmit = async () => {
        setStatus('loading');
        try {
            const res = await fetch(n8n_CONFIG.forgotpwdurl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const result = await res.json();
            if (result.status === 'sent') {
                setStatus('sent');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error('Forgot password error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Reset Your Password</h2>
            <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
            </button>
            {status === 'sent' && <p className="text-green-600">Password link sent to your email on file</p>}
            {status === 'error' && <p className="text-red-600"> Email not found on system.Please try with a different email or Register.</p>}
            <button onClick={onClose} className="text-sm text-gray-500 underline w-full">
                Cancel
            </button>
        </div>
    );
}
