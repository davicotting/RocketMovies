
    import { styled } from 'styled-components';

    export const Container = styled.div`
    
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 10px;
    background-color: ${({theme, isNew})  => isNew ? 'transparent' : theme.COLORS.BACKGROUND_INTERATIVE_PLACE};

    input{
        background-color: transparent;
        border: none;
        outline-style: none;
        color: ${({theme}) => theme.COLORS.WHITE_900};
        font-size: 16px;
        width: 150px;
    }

    input::placeholder{
        font-size: 16px;
    }

    h2{
        font-size: 16px;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300: theme.COLORS.WHITE_900};
    }

    > button{
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > svg{
            height: 24px;
            width: 24px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    .isNewStyle{
        border: 1px dashed ${({theme}) => theme.COLORS.GRAY_300};
    }
    

    `