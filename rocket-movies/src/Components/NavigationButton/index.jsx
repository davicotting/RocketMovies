
    import { Container } from './styles.js';

    export function NavigationButton({icon: Icon, title, ...rest}){
        return(
            <Container {...rest}>
                {Icon && <Icon size={20}/>}

                <a href="#">{title}</a>
            </Container>
        )
    }