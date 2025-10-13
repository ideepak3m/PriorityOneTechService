// Modal.tsx
import { ReactNode } from 'react';

export default function Modal({ isOpen, onClose, children }: {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center pt-20 z-50">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-[80%] max-w-3xl max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>

    );
}
