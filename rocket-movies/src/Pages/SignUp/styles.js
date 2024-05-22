
    
    import { styled } from "styled-components";
    import BackgroundLogin from '../../assets/BackgroundLogin.svg';
    import { Link } from 'react-router-dom';


    export const CreateAccount = styled.div`
    
    height: 100%;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    h2{
        text-align: left;
    }

    h3{
        font-size: 24px;
        margin-top: 48px;
    }

    `

    export const Aligner = styled.div`
        width: max-content;
    `


    export const Text = styled.div`
            
    text-align: left;
    margin-bottom: 48px;
    

    h1{
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;

    }

    p{
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

   

    `

    export const Form = styled.div`
            
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;


    button{
        margin-bottom: 32px;
    }

    `

    export const Container = styled.div`
        
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
   

    `
    
    export const Background = styled.div`
        
        background-image: url(${BackgroundLogin});
        background-size: cover;
        background-repeat: no-repeat;
        flex: 1;
        filter: brightness(50%);

    `

    export const ButtonContainer = styled(Link)`
    
    text-decoration: none;
    
    `