import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 11.6rem;
    gap: 6.4rem;
    padding: 0 12.3rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_PRIMARY};
`;

export const Brand = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.SECONDARY_FONT};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .9rem;

    > div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 12.5rem;

        button {
            color: ${({ theme }) => theme.COLORS.BUTTON_SECONDARY};
        }
    }

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER_PRIMARY};
    }
`;