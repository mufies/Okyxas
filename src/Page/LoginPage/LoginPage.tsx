import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../components/Authen/AuthContext';
import './LoginPage.css';
import avatar from '../../assets/avtz.jpg';
import banner from '../../assets/sanagi.jpg';

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Use token to login

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await axios.post<{ token: string }>('/api/login', formData);

            login(response.data.token);

            navigate('/dashboard');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data?.message || 'Invalid username or password.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button className="returnHomePage" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePage-icon" src={avatar} alt="Avatar" />
            </button>

            <p className="WebName">WeebHarmony</p>
            <h1 className="WelcomeHeading">WELCOME BACK</h1>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username" className="username-label">Enter username or email</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="username-input"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="password" className="password-label">Enter password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="password-input"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>

            <button className="registerBtn" type="button" onClick={() => navigate('/register')}>
                Doesn’t have an account? Register here!
            </button>

            <img className="banner" src={banner} alt="" />
        </div>
    );
}

export default LoginPage;