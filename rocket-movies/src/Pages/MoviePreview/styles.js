    
    import styled from "styled-components";
    import { Link } from "react-router-dom";

    export const Container = styled.div`

    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas: 
    "header"
    "content";

    `

    export const Content = styled.div`

    width: 100%;
    height: auto;
    padding: 40px 106px;
    grid-area: content;
    overflow-y: scroll;

    &&::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    &&::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.PINK};
        }
    
    `

    export const CreateMovieContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: start;
   

    `

    export const InputSection = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
    margin-top: 40px;
    `

    export const TextArea = styled.textarea`
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INTERATIVE_PLACE};
    padding: 19px;
    height: 274px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: none;
    resize: none;
    margin-top: 40px;
    color: ${({theme}) => theme.COLORS.WHITE_900};

    &&::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

    `

    export const ButtonSection = styled.div`
    
    width: 100%;
    display: flex;
    gap: 40px;
    margin-top: 40px;
    
    `

    export const HeaderArea = styled.div`
    width: 100%;
    grid-area: header;

    `

    export const AboutNote = styled.div`
    
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
    margin-top: 24px;
    
    h2{
        font-size: 16px;
        font-weight: 400;
    }

    
    `

    export const Date = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 6px;

    > svg{
        color: ${({theme}) => theme.COLORS.PINK};
        
    }

    `

    export const User = styled.div`
        
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;



    > img{
        height: 16px;
        width: 16px;
        border-radius: 50%;
    }

    `

    export const AboutMovie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;
    margin-top: 24px;
    
    `

    export const Rating = styled.div`
    
    display: flex;
    align-items: center;
    gap: 10px;

    svg{
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    `

    export const Sinopse = styled.div`
    
    width: 100%;
    color: ${({theme}) => theme.COLORS.WHITE_900};
    font-weight: 400;

    `

    export const TagGroup = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-block: 40px;
    
    `

    export const ButtonContainer = styled(Link)`
        
    text-decoration: none;

    `