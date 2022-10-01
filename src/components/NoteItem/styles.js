import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_PRIMARY_INPUT};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BUTTON_SECONDARY}` : 'none'};
    
    padding-right: 1.6rem;
    border-radius: .8rem;


    > input {
        width: 100%;
        height: 5.6rem;

        padding: 1.2rem;
        cursor: ${({ isNew }) => isNew ? 'auto' : 'context-menu'};
        background: none;
        color: white;

        &::placeholder{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 1.9rem;
        }
    }
    
    > button {
        background: none;

        svg {
            color: ${({ theme }) => theme.COLORS.SECONDARY_FONT}
        }
    }
`;