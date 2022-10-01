import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;

    svg { 
        color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }

    .b {
        fill: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    }
`;