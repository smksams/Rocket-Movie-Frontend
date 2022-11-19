import { Container, Brand, Profile } from './styles';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate()

    function navigationProfile() {
        navigate('/profile')
    }
    return(
        <Container>
            <Brand onClick={() => navigate('/')}>
            RocketMovies
            </Brand>
            <Input placeholder='Pesquisar pelo título' />

            <Profile>
                <div>
                    <strong onClick={navigationProfile}>Samuel Santos</strong>
                    <ButtonText title='sair' />
                </div>
                <img src="https://github.com/smksams.png" alt="foto do usuario" onClick={navigationProfile} />
            </Profile>

        </Container>
    )
}