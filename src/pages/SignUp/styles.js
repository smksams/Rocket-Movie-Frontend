import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.jpg'

export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 13.4rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.SECONDARY_FONT};
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 6.3rem;
    }

    > p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
    }

    > h2 {
        margin: 4.8rem 0;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
    }

    .login-button{
        margin: .8rem 0 4.2rem;
    }

    .text-button {
        margin: 0 auto;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.3);
`