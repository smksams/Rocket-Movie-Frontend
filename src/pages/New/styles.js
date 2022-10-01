import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 11.6rem auto;

    grid-template-areas: 
    "header"
    "section";
`;

export const Section = styled.div`
    padding: 4rem 10.6rem 8.5rem 12.3rem;
    overflow-y: auto;
    grid-area: section;

    &::-webkit-scrollbar {
        width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }

    > h1 {
        margin: 2.4rem 0 4rem ;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;

        color: ${({ theme }) => theme.COLORS.PRIMARY_FONT};
    }

    > h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.6rem;

        color: ${({ theme }) => theme.COLORS.SECONDARY_FONT_NOTE};
    }

    > .dark {
        display: flex;
        justify-content: flex-start;
        margin: 2.4rem 0 4rem;
        padding: 1.6rem;
        gap: 2.4rem;
        align-items: center;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 27.4rem;
    padding: 1.8rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY_INPUT};
    border-radius: 1rem;
    gap: 1.6rem;
    resize: none;
    margin: 4rem 0;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER_PRIMARY};
    }

    &::-webkit-scrollbar {
        width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }
    
`;