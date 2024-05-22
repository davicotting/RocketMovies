
    import { styled } from 'styled-components';
    import { Link } from 'react-router-dom';

    export const Container = styled.div`
    
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-areas: 
        "header"
        "content";
        grid-template-rows: 108px auto;
    `

    export const Content = styled.div`
        
        grid-area: content;
        padding: 50px 123px;
        
    `

    export const MyNotes = styled.div`
    height: 380px;
    overflow-y: scroll;
    padding-inline: 5px;
    display: flex;
    flex-direction: column;
    gap: 24px;

        
    &&::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    &&::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.PINK};
        }
        
    
      
    `

    export const MyNotesHeader = styled.div`
        
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;

    `

    export const ButtonContainer = styled(Link)`
        
    text-decoration: none;

    `