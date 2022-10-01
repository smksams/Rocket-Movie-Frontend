import styled from 'styled-components';

export const Container = styled.span`
    display: inline-flex;
    border-radius: .8rem;
    justify-content: center;
    padding: .5rem 1.6rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #E5E5E5;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_PRIMARY};
`;