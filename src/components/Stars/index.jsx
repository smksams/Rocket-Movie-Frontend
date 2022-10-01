import { Container } from './styles';
import { FiStar } from 'react-icons/fi'

export function Stars({size}) {
    return(
        <Container>
            <FiStar className='e d c b a' size={size} />
            <FiStar className='d c b a' size={size} />
            <FiStar className='c b a' size={size} />
            <FiStar className='b a' size={size} />
            <FiStar className='a' size={size} />
        </Container>
    )
}