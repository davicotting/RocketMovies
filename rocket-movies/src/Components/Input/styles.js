
    import { styled } from 'styled-components';

    export const Container = styled.div`

    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 16px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INTERATIVE_PLACE};

    input{
        font-size: 16px;
        width: 100%;
        font-family: "Roboto", sans-serif;
        background-color: transparent;
        border: none;
        outline: none;
        color: ${({theme}) => theme.COLORS.WHITE_900};
    }

    input::placeholder{
            font-family: "Roboto", sans-serif;
            color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    `