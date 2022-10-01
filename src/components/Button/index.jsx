import { Container } from './styles';

export function Button({isDark, icon: Icon, title, ...rest }) {
    return (
        <Container 
        isDark={isDark}
        type='button'
        {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}