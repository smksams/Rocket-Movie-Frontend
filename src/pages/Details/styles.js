import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "section";
`;

export const Section = styled.section`
    grid-area: section;
    margin: 4rem 10.6rem 15.6rem 12.3rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }

    > p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: justify;
        padding-right: 1.6rem;

        color: ${({ theme }) => theme.COLORS.PRIMARY_FONT};
    }
`;

export const Main = styled.div`
    margin: 2.4rem 0;
    display: flex;
    align-items: center;
    gap: 1.9rem;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }

    > span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY_FONT};
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }

`;

export const Tags = styled.div`
    display: inline-flex;
    gap: .8rem;
    margin: 4rem 0;
`;