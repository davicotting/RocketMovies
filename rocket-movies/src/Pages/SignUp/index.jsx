
        
    import { Container, CreateAccount, Background, Text, Form, Aligner, ButtonContainer } from './styles';
    
    import { Input } from '../../Components/Input';
    import { Button } from '../../Components/Button';
    import { NavigationButton } from '../../Components/NavigationButton';

    import { MdEmail } from "react-icons/md";
    import { FaLock } from "react-icons/fa";
    import { FaUser } from "react-icons/fa";
    import { IoArrowBackOutline } from "react-icons/io5";

    

    export function SignUp(){
        return(
            <Container>
            <CreateAccount>
                <Aligner>
                <Text>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Crie sua conta</h3>
                </Text>

               <Form>
                <Input placeholder="Nome" icon={FaUser}/>
                <Input placeholder="E-mail" icon={MdEmail}/>
                <Input placeholder="Senha" icon={FaLock}/>

               <Button title={"Increver-se"}/>

                <ButtonContainer to={"/login"}>
                <NavigationButton title={"Voltar para o login"} icon={IoArrowBackOutline}/>
                </ButtonContainer>
               

               </Form>
               
               </Aligner>
            </CreateAccount>
        
            <Background />

            </Container>
        )
    }