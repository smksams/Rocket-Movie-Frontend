import { Container, Brand, Profile } from './styles';

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

export function Header() {
    return(
        <Container>
            <Brand>
            RocketMovies
            </Brand>
            <Input placeholder='Pesquisar pelo título' />

            <Profile>
                <div>
                    <strong>Samuel Santos</strong>
                    <ButtonText title='sair' />
                </div>
                <img src="https://github.com/smksams.png" alt="foto do usuario" />
            </Profile>

        </Container>
    )
}