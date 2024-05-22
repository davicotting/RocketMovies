
    import { styled } from "styled-components";
    import { Link } from "react-router-dom";

    export const Container = styled.div`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIE_NOTE};
    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    

    h2{
        color: ${({theme}) => theme.COLORS.WHITE_800};
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 8px;
    }

    p{
        color: ${({theme}) => theme.COLORS.WHITE_700};
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 16px;
        height:  98px;
        overflow-y: scroll;

        
    }

        p::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 7px;
        }

        p::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.PINK};
        }
    `

    export const Rating = styled.div`
    
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 15px;

    svg{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    `

    export const TagGroup = styled.div`
        
    display: flex;
    align-items: center;
    gap: 16px;

    `

    export const CardLink = styled(Link)`
    
    
    color: ${({theme}) => theme.COLORS.WHITE_900};
    text-decoration: none;

    `
