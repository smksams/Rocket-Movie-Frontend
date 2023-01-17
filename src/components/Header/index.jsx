import { Container, Brand, Profile } from './styles';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'

export function Header() {
    const navigate = useNavigate()
    const { singOut } = useAuth()

    function logOut() {
        singOut()
        navigate('/')
    }

    function navigationProfile() {
        navigate('/profile')
    }
    return (
        <Container>
            <Brand onClick={() => navigate('/')}>
                RocketMovies
            </Brand>
            <Input placeholder='Pesquisar pelo título' />

            <Profile>
                <div>
                    <strong onClick={navigationProfile}>Samuel Santos</strong>
                    <ButtonText onClick={logOut} title='sair' />
                </div>
                <img src="https://github.com/smksams.png" alt="foto do usuario" onClick={navigationProfile} />
            </Profile>

        </Container>
    )
}