
    import { createGlobalStyle } from 'styled-components';
    import theme from './theme.js';
    export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
        color:  ${({theme}) => theme.COLORS.WHITE_900};
        font-family: "Roboto", sans-serif;
    }
    
    `