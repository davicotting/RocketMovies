
    import { styled } from 'styled-components';

    export const Container = styled.button`
    width: ${({isDinamic}) => isDinamic ? '100%': 'auto'};
    margin-top: ${({isDinamic}) => isDinamic ? '0' : '24px'};
    background-color: ${({theme, toDelete}) => toDelete ? theme.COLORS.BACKGROUND_MARKER : theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({theme, toDelete}) => toDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_MARKER};
    font-weight: 500;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    padding: 15px 32px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: .4s;
    
    &&:hover{
        scale: calc(.96);
        opacity: calc(.5);
    }
    `