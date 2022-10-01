import { Container } from './styles';

export function Input({disabled, icon: Icon, ...rest}) {
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input disabled={disabled} {...rest} />
        </Container>
    )
}