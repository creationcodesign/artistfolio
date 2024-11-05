import { useState } from 'react';
import axios from 'axios';

interface RegisterProps {
    setIsLoginAction: (isLoginAction: boolean) => void;
}

export default function Register({ setIsLoginAction }: RegisterProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const [loading, setLoading] = useState(false); // State for loading indicator

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading state
        setErrorMessage(''); // Clear previous error messages
        try {
            const response = await axios.post('/api/auth/register', { email, password });
            localStorage.setItem('token', response.data.token); // Store token for future requests
            // Optionally redirect or update state here
        } catch (error) {
            // Improved error handling
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message || 'Registration failed'); // Display server error message
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        } finally {
            setLoading(false); // Stop loading state
        }
    };


    return (
        <div className='auth-section register-section'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className='auth-form'>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                {/* Display error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* Show loading state */}
                <button type="submit" className='btn-auth-register' disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            <div className="auth-section-link login-link">
                <p>Already have an account?</p>
                <span onClick={() => setIsLoginAction(true)} className='auth-link'>
                    Login
                </span>
            </div>
        </div>
    );
}
