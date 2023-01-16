import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    const { singIn } = useAuth()

    function handleSingIn() {
        singIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type='email' icon={FiMail} placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                <Input type='password' icon={FiLock} placeholder='Senha' onChange={e => setPassword(e.target.value)} />

                <Button onClick={handleSingIn} className='login-button' title='Entrar' />
                <ButtonText onClick={() => navigate('/register')} className='text-button' title='Criar conta' />

            </Form>

            <Background />
        </Container>
    )
}