// src/components/FloatingChat.tsx
import { useState } from 'react';
import { CHAT_CONFIG } from '../config/globals';

const FloatingChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    {CHAT_CONFIG.buttonText || "Let's Chat"}
                </button>
            )}

            {isOpen && (
                <div
                    className="relative shadow-xl rounded-lg overflow-hidden"
                    style={{ width: CHAT_CONFIG.iframeWidth, height: CHAT_CONFIG.iframeHeight }}
                >
                    <iframe
                        src={CHAT_CONFIG.chatUrl}
                        title={CHAT_CONFIG.title || "Let's Chat"}
                        className="w-full h-full border-none"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
};

export default FloatingChat;
