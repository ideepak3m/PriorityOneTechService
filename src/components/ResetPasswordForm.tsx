import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { n8n_CONFIG } from '@/config/globals';

type Props = {
    uuid: string;
    onClose: () => void;
};

export default function ResetPasswordForm({ uuid, onClose }: Props) {
    const [newPassword, setNewPassword] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleReset = async () => {
        setStatus('loading');
        try {
            const hashed = await bcrypt.hash(newPassword, 10);
            const res = await fetch(n8n_CONFIG.updatepwdurl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uuid, newPassword: hashed }),
            });
            const result = await res.json();
            if (result.message === 'success') {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error('Reset error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Reset Your Password</h2>
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-2 w-full"
            />
            <button
                onClick={handleReset}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Resetting...' : 'Reset Password'}
            </button>
            {status === 'success' && <p className="text-green-600">Password updated successfully. You can now log in.</p>}
            {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
            <button onClick={onClose} className="text-sm text-gray-500 underline w-full">
                Cancel
            </button>
        </div>
    );
}
