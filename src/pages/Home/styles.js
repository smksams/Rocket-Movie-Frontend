import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem 14rem auto;
    grid-template-areas: 
    "header"
    "section"
    "content";
`;

export const Section = styled.div`
    grid-area: section;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 9.7rem;
    margin-bottom: 4rem;
    padding: 5rem 10.6rem 0 12.3rem;

    > h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 4.2rem;
    }
    
    > button {
        width: fit-content;
        padding: 1.3rem 3.2rem;
    }
    
`;

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;
    margin: 0 9.8rem 5.8rem 12.3rem;
    position: relative;
    padding-right: .8rem;

    &::-webkit-scrollbar {
        width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }
`;