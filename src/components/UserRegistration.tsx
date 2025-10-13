import { useState } from "react";
import { n8n_CONFIG } from '@/config/globals';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

type Props = {
    onClose: () => void;
};

export default function UserRegistration({ onClose }: Props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!firstName || !lastName || !email || !password) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            const userID = uuidv4();
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const response = await fetch(n8n_CONFIG.registerurl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userID,
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                }),
            });

            const result = await response.json();

            if (response.ok && result.message === "success") {
                alert("Registration successful!");
                onClose();
            } else if (result.message === "user exists") {
                alert("This email is already registered. Try logging in instead.");
            } else {
                alert(result.message || "Registration failed");
            }

        } catch (error) {
            console.error("Error registering:", error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Register</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border p-2 mb-2"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border p-2 mb-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 mb-4"
                />
                <button
                    onClick={handleRegister}
                    disabled={loading}
                    className="bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                <button
                    onClick={onClose}
                    className="mt-2 text-gray-500 text-sm underline w-full"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
