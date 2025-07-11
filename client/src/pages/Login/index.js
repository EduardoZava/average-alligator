import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo-omdb.png'
import padlock from '../../assets/padlock.png'

export default function Login() {

    const [user_name, setUsername] = useState('');
    const [pwd, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        setError("");

        const data = {
            user_name,
            pwd
        };

        try {
            const response = await api.post('/api/v1/login', data) ;
            
            localStorage.setItem('user_name', user_name);
            localStorage.setItem('nome', response.data.nome);
            localStorage.setItem('sobrenome', response.data.sobrenome);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('eh_admin', response.data.eh_admin);
            localStorage.setItem('auth_token', response.data.auth_token);
            //localStorage.setItem('accessToken', response.data.accessToken);
            //localStorage.setItem('refreshToken', response.data.refreshToken);

            navigate('/movies');
        } catch (error) {
            setError('Usuario e senha inválidos! Tente novamente!');
        }

    };

    async function guest(e){
        e.preventDefault();

        setError("");

        const data = {
            user_name: 'Guest',
            pwd: 'guest'
        };

        localStorage.setItem('user_name', data.user_name);
        localStorage.setItem('nome', data.user_name);

        navigate('/movies');

    };


    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="OMDB Logo"/>
                <form
                    onSubmit={e => {
                        if (e.nativeEvent.submitter && e.nativeEvent.submitter.name === "guest") {
                            guest(e);
                        } else {
                            login(e);
                        }
                    }}
                >
                    <h1>Conta</h1>
                    <input
                        placeholder="Usuario"
                        value={user_name}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={pwd}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit" name="login">Login</button>
                    <button className="button" type="submit" name="guest">Guest</button>
                    {error && <p className="new-review-error">{error}</p>}
                </form>

            </section>

            <img src={padlock} alt="Login"/>

        </div>
    )

}