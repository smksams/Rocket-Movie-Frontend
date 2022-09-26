import { Container, Stars, Tags } from './styles'

export function Note({ title, description, tagName, rate, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{title}</h1>
            <Stars value={rate} />
            <p>{description}</p>
            <Tags>{tagName}</Tags>
        </Container>
    )
}