
    import { Container } from './styles.js';

    export function Button({icon: Icon, title, toDelete, isDinamic, ...rest}){
        return(
            <Container {...rest} toDelete={toDelete} isDinamic={isDinamic}>
                {Icon && <Icon size={20}/>}

                {title}
            </Container>
        )
    }