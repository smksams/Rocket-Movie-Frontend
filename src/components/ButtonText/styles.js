import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    background: none;
    color: ${({ theme }) => theme.COLORS.SECONDARY_FONT};

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    gap: .8rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.SECONDARY_FONT};
    }
`;