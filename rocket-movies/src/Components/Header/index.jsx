    
    import { Configs, Container, User, ButtonContainer} from './styles'
    import { IoSearch } from "react-icons/io5";
    import { Input } from '../Input'

    import { Link } from 'react-router-dom';

    export function Header(){
        return(
            <Container>
            <ButtonContainer to={"/"}>
                <h2>RocketMovies</h2>
            </ButtonContainer>

                <Input placeholder={"Pesquisar pelo título"} icon={IoSearch}/>

                <User>
                    <Configs>
                    
                        <h3>Davi Cotting</h3>
                    
                    

                    <Link to={"/profile"}>Sair</Link>
                    </Configs>

                    <Link to={"/profile"}><img src="http://github.com/davicotting.png" alt="" /></Link>
                </User>

            </Container>
        )
    }