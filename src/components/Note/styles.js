import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.NOTE_PRIMARY};
    padding: 3.2rem;
    gap: 1.5rem;
    margin-bottom: 2.4rem;

    border-radius: 1.6rem;

    > h3 {
        margin-bottom: .8rem;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY_FONT_NOTE};
    }

    > p {
        margin-top: 1.5rem;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; 
        -webkit-box-orient: vertical;

        color: ${({ theme }) => theme.COLORS.SECONDARY_FONT_NOTE};
    }

    > footer {
        display: flex;
        gap: .8rem;
        margin-top: 1.5rem;
    }

`;