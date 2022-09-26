import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > main {
        padding: 5rem 10.6rem 5.8rem 12.3rem;
    }
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    overflow-y: auto;
`;