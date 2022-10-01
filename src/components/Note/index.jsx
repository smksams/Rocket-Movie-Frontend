import { Container } from './styles';

import { Tag } from '../Tag';
import { Stars } from '../Stars';

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h3>{data.title}</h3>
            <Stars size={12} />

            <p>{data.description}</p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}