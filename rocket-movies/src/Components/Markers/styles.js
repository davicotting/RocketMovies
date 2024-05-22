
    import  { styled } from 'styled-components';

    export const Container = styled.div`
    
    height: auto;
    width: 100%;
    margin-top: 40px;
  

    h2{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
    }
    
    `

    export const MarkersSection = styled.div`
        
    padding: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MARKER};
    margin-top: 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;

    h1{
        margin: 0;
    }
    `