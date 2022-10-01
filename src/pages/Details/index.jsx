import { Container, Section, Main, User, Tags } from './styles';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function Details() {
    return(
        <Container>
            <Header />
            <Section>
                <ButtonText icon={FiArrowLeft} title='Voltar' />

                <Main>
                    <h1>Interestellar</h1>
                    <Stars size={20} />
                </Main>

                <User>
                    <img 
                    src="https://github.com/smksams.png" 
                    alt="Foto do usuario" 
                    />
                    <span>Por Samuel dos Santos Filho</span>
                    <FiClock />
                    <span>23/05/22 às 08:00</span>
                </User>

                <Tags>
                    <Tag title='Ação' />
                    <Tag title='Aventura' />
                </Tags>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed quibusdam ducimus blanditiis, neque vel placeat? Perspiciatis iste consectetur possimus modi, adipisci quo 
                    nostrum voluptas totam sint, omnis commodi explicabo.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quae assumenda deserunt impedit nihil minima reiciendis iusto quidem. Nam eveniet sit accusamus officia doloribus, in magni ducimus sint quod velit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt ipsa tempore adipisci numquam ea voluptatem perspiciatis nihil dolor. Voluptates repudiandae id laboriosam facere dolor nulla, quis illo placeat vitae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br /> Officia, ipsa minus modi molestiae nisi molestias, veritatis cupiditate distinctio inventore architecto eos amet dolores, libero ex suscipit sequi necessitatibus magni iure?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptate ipsam enim vel unde quisquam laudantium quasi modi facilis ut id reiciendis libero quod doloremque, blanditiis porro iure illo tempora!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga consequuntur, delectus veniam magni, natus eligendi commodi optio atque vitae, explicabo neque in? Debitis nulla, neque enim suscipit animi fugiat velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi sunt voluptatibus vitae repellendus modi consequatur cupiditate eum ab, fugit eius ea. Corrupti labore eos mollitia quos rerum atque sequi?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quam quaerat esse natus cum voluptatibus consequatur ullam, quidem suscipit atque quod voluptas quia velit quibusdam. Consequatur iusto fuga blanditiis saepe.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum laboriosam eligendi labore omnis! Repellendus id temporibus repudiandae nobis distinctio error, voluptas quae aspernatur? A adipisci deleniti rerum totam voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem maxime amet, corporis unde repellendus fuga quas error? Laudantium cum dolor culpa eaque odit non ipsam quidem accusamus sunt ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque blanditiis, aliquid, dolore in unde illum obcaecati molestiae ducimus rem ratione, repudiandae temporibus repellat vitae aut aliquam ab dolorem esse?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur minima illum fugiat quae nam reiciendis sequi voluptatum cupiditate eveniet aliquam dolores ea vel animi rem aliquid, aperiam est, consectetur sed!
                    </p>


            </Section>
        </Container>
    )
}