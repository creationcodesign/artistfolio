import { Icon } from '@ailibs/feather-react-ts';
import React, { createContext, useContext, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: ToastType) => {
        const newToast = { message, type };
        setToasts((prev) => [...prev, newToast]);

        // Automatically remove the toast after 5 seconds
        setTimeout(() => {
            removeToast(message);
        }, 50000);
    };

    const removeToast = (message: string) => {
        setToasts((prev) => prev.filter((toast) => toast.message !== message));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </ToastContext.Provider>
    );
};

const ToastContainer: React.FC<{ toasts: Toast[]; onRemove: (message: string) => void }> = ({ toasts, onRemove }) => {
    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }}>
            {toasts.map((toast, index) => (
                <div
                    key={index}
                    className='toast'
                    style={{
                        backgroundColor: getColor(toast.type),
                    }}
                >
                    <p>{toast.message}</p>
                    <Icon name="x"
                        className="toast__close"
                        onClick={() => onRemove(toast.message)}
                    />
                </div>
            ))}
        </div>
    );
};

const getColor = (type: ToastType) => {
    switch (type) {
        case 'success':
            return '#3EA45F';
        case 'error':
            return '#f74f39';
        case 'info':
            return '#44B3EA';
        default:
            return '#aba9ad';
    }
};
