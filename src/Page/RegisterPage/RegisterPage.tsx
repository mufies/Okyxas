import './RegisterPage.css';
import avatar from '../../assets/avtz.jpg';
import pic from '../../assets/regpic.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Authen/AuthContext';
import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({ username: '', email: '', password: '', reenterpassword: '' });
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

        if (formData.password !== formData.reenterpassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post<{ token: string }>('/api/register', formData);

            login(response.data.token);

            navigate('/dashboard');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data?.message || 'Registration failed.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button className="returnHomePage" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePage-icon" src={avatar} alt="Avatar" />
            </button>
            <p className="WebName">WeebHarmony</p>
            <h1 className="register-WebName">REGISTER</h1>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="username" className="register-username-label">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="register-username-input"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="email" className="register-email-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="register-email-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="password" className="register-password-label">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="register-password-input"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="reenterpassword" className="register-reenterpassword-label">Re-enter Password</label>
                <input
                    type="password"
                    id="reenterpassword"
                    name="reenterpassword"
                    className="register-reenterpassword-input"
                    value={formData.reenterpassword}
                    onChange={handleInputChange}
                    required
                />

                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="register-button" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            <img src={pic} className="regpic" />
        </>
    );
}

export default RegisterPage;