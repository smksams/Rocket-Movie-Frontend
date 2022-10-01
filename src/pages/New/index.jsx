import { Container, Section, Wrapper, TextArea } from './styles';
import { FiArrowLeft, FiX } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function New() {
    return (
        <Container>
            <Header />
            <Section>
                <ButtonText icon={FiArrowLeft} title='Voltar' />


                <h1>Novo filme</h1>

                <Wrapper>
                    <Input placeholder='Título' type='text' />
                    <Input min={0} max={5} placeholder='Sua nota (de 0 a 5)' type='number' />
                </Wrapper>

                <TextArea placeholder='Observações' />

                <h2>Marcadores</h2>

                <Wrapper className='dark'>
                    <NoteItem value='React' />
                    <NoteItem isNew placeholder='Novo marcador' />
                </Wrapper>

                <Wrapper>
                    <Button isDark title='Excluir filme' />
                    <Button title='Salvar alterações' />
                </Wrapper>

            </Section>

        </Container>
    )
}