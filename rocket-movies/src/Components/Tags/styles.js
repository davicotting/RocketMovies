
    import { styled } from "styled-components";

    export const Container = styled.div`
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
    color: ${({theme}) => theme.COLORS.WHITE_700};
    padding: 5px 16px;
    border-radius: 8px;
    transition: .4s;

    cursor: pointer;

    &&:hover{
        scale: calc(.94);
    }
    `

