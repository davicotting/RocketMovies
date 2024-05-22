
    import { styled } from "styled-components";

    export const Container = styled.div`

        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: .4s;
        cursor: pointer;

        &&:hover{
            opacity: calc(.5);   
        }

        svg{
            color: ${({theme}) => theme.COLORS.PINK};
        }

        a{
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.PINK};
            transition: .4s;
        }


    `