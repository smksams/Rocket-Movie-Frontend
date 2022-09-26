import { Container, Section, Content } from './styles';
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <Section>
                    <h1>Meus filmes</h1>
                    <Button icon={FiPlus} title='Adicionar filme' />
                </Section>

                <Content>


                </Content>
            </main>
        </Container>
    )
}