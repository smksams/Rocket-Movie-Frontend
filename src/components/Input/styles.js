import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1.8rem;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY_INPUT};
    border-radius: 1rem;
    margin-bottom: .8rem;
    gap: 1.6rem;

    > input {
        background: none;
        width: 100%;


        &::placeholder {
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER_PRIMARY};
        }
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER_PRIMARY};
    }
`