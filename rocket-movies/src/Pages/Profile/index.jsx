
    import { Container, Header, Form, UserSettings, InputArea, AlterUserImage, ButtonContainer } from './styles.js';

    import { Input } from '../../Components/Input'
    import { Button } from '../../Components/Button'
    import { IoIosCamera } from "react-icons/io";

    import { NavigationButton } from '../../Components/NavigationButton';
    import { IoArrowBackOutline } from "react-icons/io5";
    import { MdEmail } from "react-icons/md";
    import { FaLock } from "react-icons/fa";
    import { FaUser } from "react-icons/fa";


    export function Profile(){
        return(
            <Container>
                <Header>
                    <ButtonContainer to={"/"}><NavigationButton icon={IoArrowBackOutline} title={"Voltar"}/></ButtonContainer>
                </Header>

                <Form>

            
                    <UserSettings>

                    <AlterUserImage>
                    
                    <img src="https://github.com/davicotting.png" alt="" />
                    
                    <label htmlFor="avatar">
                        <IoIosCamera/>
                        <input

                        type="file" 
                        id="avatar" 
                        />
                    </label>

                    </AlterUserImage>

                   
                    <InputArea>
                    <Input icon={FaUser} placeholder={"Nome"}/>
                    <Input icon={MdEmail} placeholder={"Email"}/>
                    </InputArea>

                    <Input icon={FaLock} placeholder={"Senha atual"}/>
                    <Input icon={FaLock} placeholder={"Nova senha"}/>
                    
                    <Button icon={false} title={"Salvar"}/>
                    </UserSettings>
                </Form>
            </Container>
        )
    }