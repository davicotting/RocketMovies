
    import { styled } from 'styled-components';
    import { Link } from 'react-router-dom';

    export const Container = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        padding: 24px 124px;
        gap: 95px;
        border-bottom: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_TAG};

        h2{
            font-size: 24px;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    `

    export const User = styled.div`
    
     display: flex;
     gap: 16px;
     align-items: center;

     img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_TAG};
        cursor: pointer;
     }
    
    `

    export const Configs = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: end;

    a{
        text-decoration: none;
        color:${({theme}) => theme.COLORS.GRAY_300};
        font-weight: 400;
    }
    
    h3{
        font-size: 14px;
        width: max-content;
        font-weight: 700;
    }



    a:hover{
        text-decoration: underline;
    }
    `

    export const ButtonContainer = styled(Link)`
                
    text-decoration: none;

    
    `
    