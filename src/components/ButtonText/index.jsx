import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

export function ButtonText({icon: Icon, title, navigation,...rest}) {
    const navigate = useNavigate()
    return(
        <Container
        type='button'
        onClick={() => navigate(navigation)}
        {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}