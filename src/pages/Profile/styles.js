import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HeaderProfile = styled.div`
    display: flex;
    width: 100%;
    height: 11.6rem;
    padding-left: 11.4rem;
    background-color: ${({ theme }) => theme.COLORS.NOTE_PRIMARY};
`;

export const User = styled.div`
    display: flex;
    margin: -9.3rem auto 6.4rem;
    position: relative;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
        
    }

    > label {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        right: 0;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        cursor: pointer;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};

        &:hover {
            filter: brightness(0.9);
        }

        svg {
            width: 2rem;
            height: 2rem;

            color: ${({ theme }) => theme.COLORS.BUTTON_PRIMARY};
        }
        
        input {
            display: none;
        }

    }
`;

export const Form = styled.form`
    width: 34rem;
    margin: 0 auto;

    > div:nth-child(even) {
        margin-bottom: 2rem;
    }
`;

