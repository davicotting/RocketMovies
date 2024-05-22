    
    import { Container, CreateAccount, Background, Text, Form, Aligner, ButtonContainer } from './styles';
    
    import { Input } from '../../Components/Input';
    import { Button } from '../../Components/Button';
    import { NavigationButton } from '../../Components/NavigationButton';

    import { MdEmail } from "react-icons/md";
    import { FaLock } from "react-icons/fa";

    import { Link } from 'react-router-dom';

    export function SignIn(){
        return(
            <Container>
            <CreateAccount>
                <Aligner>
                <Text>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>
                </Text>

               

               <Form>

                <Input placeholder="E-mail" icon={MdEmail}/>
                <Input placeholder="Senha" icon={FaLock}/>

               <Button title={"Entrar"}/>

               <ButtonContainer to={"/register"}><NavigationButton title={"Criar conta"} icon={false}/></ButtonContainer>

               </Form>
               
               </Aligner>
            </CreateAccount>
           
            <Background />

            </Container>
        )
    }