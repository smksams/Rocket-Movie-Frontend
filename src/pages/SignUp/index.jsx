import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} placeholder='Nome' />
                <Input icon={FiMail} placeholder='E-mail' />
                <Input icon={FiLock} placeholder='Senha' />

                <Button className='login-button' title='Cadastrar' />
                <ButtonText icon={FiArrowLeft} className='text-button' title='Voltar para o login' />

            </Form>
            <Background />
        </Container>
    )
}