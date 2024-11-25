import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

interface LoginProps {
    setIsLoginAction: (isLoginAction: boolean) => void; // Type for setIsLoginAction function
}

export default function Login({ setIsLoginAction }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const [loading, setLoading] = useState(false); // State for loading indicator
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading state
        setErrorMessage(''); // Clear previous error messages

        try {
            const response = await axios.post('/api/auth/login', { email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log("LOGIN RESPONSE:", response);
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            const token = response.data.token;
            login(token);
            navigate('/auth/profile', { replace: true });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message || 'Login failed'); // Display server error message
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        } finally {
            setLoading(false); // Stop loading state
        }
    };


    return (
        <div className='auth-section login-section'>
            <h2>Login</h2>
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

                {/* Display loading indicator */}
                <button type="submit" className='btn-auth-login' disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>

            <div className="auth-section-link register-link">
                <p>No account yet?</p>
                <span onClick={() => setIsLoginAction(false)} className='auth-link'>
                    Register
                </span>
            </div>
        </div>
    )
}
