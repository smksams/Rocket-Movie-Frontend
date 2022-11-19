import { useState } from 'react';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSingUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos")
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuario Cadastrado com sucesso')
                navigate(-1)
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar')
                }
            })
    }


    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    type='text'
                    icon={FiUser}
                    placeholder='Nome'
                    onChange={e => setName(e.target.value)} />

                <Input
                    type='email'
                    icon={FiMail}
                    placeholder='E-mail'
                    onChange={e => setEmail(e.target.value)} />

                <Input
                    type='password'
                    icon={FiLock}
                    placeholder='Senha'
                    onChange={e => setPassword(e.target.value)} />

                <Button onClick={handleSingUp} className='login-button' title='Cadastrar' />
                <ButtonText onClick={() => navigate(-1)} icon={FiArrowLeft} className='text-button' title='Voltar para o login' />

            </Form>
            <Background />
        </Container>
    )
}
