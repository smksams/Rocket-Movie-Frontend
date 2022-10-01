import { Container, Section, Content } from './styles';
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

export function Home() {
    return (
        <Container>
            <Header />

            <Section>
                <h1>Meus filmes</h1>
                <Button icon={FiPlus} title='Adicionar filme' />
            </Section>


                <Content>
                    <Note
                        data={{
                            title: 'Homem Aranha',
                            rate: 4,
                            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora odit unde provident ratione cum, sapiente nulla eveniet minus incidunt deleniti ut iusto, ullam, blanditiis harum eligendi consequatur fugit dicta ipsam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora odit unde provident ratione cum, sapiente nulla eveniet minus incidunt deleniti ut iusto, ullam, blanditiis harum eligendi consequatur fugit dicta ipsam.",
                            tags: [
                                { id: '1', name: 'Ação' },
                                { id: '2', name: 'Aventura' }
                            ]
                        }}
                    />

                    <Note
                        data={{
                            title: 'Homem Aranha',
                            rate: 4,
                            description: "Lorem ipsum dolor si",
                            tags: [
                                {
                                    id: '1',
                                    name: 'Ação'
                                },
                                {
                                    id: '2',
                                    name: 'Aventura'
                                },
                            ]
                        }}
                    />

                </Content>

        </Container>
    )
}