import { Container, HeaderProfile, Form, User } from './styles';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Profile() {
    return(
        <Container>
            <HeaderProfile>
                <ButtonText icon={FiArrowLeft} title='Voltar' />
            </HeaderProfile>

                <User>
                    <img src="https://github.com/smksams.png" alt="Foto do Usuario" />
                    <label htmlFor='avatar'>
                        <FiCamera />
                    <input id='avatar' type='file' />
                    </label>
                </User>

            <Form>

                <Input 
                icon={FiUser}  
                placeholder='Nome Completo'
                type='text'
                />

                <Input 
                icon={FiMail} 
                placeholder='E-mail'
                type='email'
                />

                <Input 
                icon={FiLock} 
                placeholder='Senha atual'
                type='password'
                />

                <Input 
                icon={FiLock} 
                placeholder='Nova senha'
                type='password'
                />

                <Button title='Salvar' />
            </Form>
                
        </Container>
    )
}