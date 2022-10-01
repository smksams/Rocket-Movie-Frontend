import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme, isDark }) => isDark ? theme.COLORS.DARK : theme.COLORS.BACKGROUND_SECONDARY};
    padding: 1.6rem 0;
    border-radius: 1rem;
    color: ${({ theme, isDark }) => isDark ? theme.COLORS.SECONDARY_FONT : theme.COLORS.BUTTON_PRIMARY};
    gap: .8rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.BUTTON_PRIMARY}
    }
`