   
   import { styled } from "styled-components";
   import { Link } from "react-router-dom";

   export const Container = styled.div`
   
   height: 100vh;
   width: 100%;
   position: relative;

   `

    export const Header = styled.div`
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIE_NOTE};
    height: 144px;
    display: flex;
    padding: 64px 168px; 
    `

    export const Form = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 144px);

   
    
    `

    export const UserSettings = styled.div`
        
        
        width: 340px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: -150px;
       
        
    `

    export const InputArea = styled.div`
    
    margin-bottom: 24px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    
    `

    export const AlterUserImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img{
            height: 200px;
            width: 200px;
            border-radius: 50%;
            margin-bottom: 33px;
        }

        > label{

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        position: absolute;
        bottom: 40px;
        right: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: ${({theme}) => theme.COLORS.PINK};

        cursor: pointer;

        input {
            display: none;
        }

        svg{
            height: 30px;
            width: 30px;

            color: ${({theme}) => theme.COLORS.BACKGROUND_MARKER};
            border-radius: 50%;
        }
    }
    
    `

    export const ButtonContainer = styled(Link)`
            
    text-decoration: none;
    

    `
    