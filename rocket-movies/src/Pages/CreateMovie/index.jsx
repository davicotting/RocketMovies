    
    import { Container, Content, CreateMovieContainer, InputSection, TextArea, ButtonSection, HeaderArea, ButtonContainer } from './styles.js'
    import { Header } from '../../Components/Header';
    import { NavigationButton } from '../../Components/NavigationButton'
    import { IoArrowBackOutline } from "react-icons/io5";

    import { Input } from '../../Components/Input';
    import { Markers } from '../../Components/Markers/index.jsx';
    import { MarkerTag } from '../../Components/MarkerTag/index.jsx';
    import { Button } from '../../Components/Button';

    export function CreateMovie(){
        return(
            <Container>
                
            <HeaderArea>
            <Header/>
            </HeaderArea>
            
            <Content>
                <CreateMovieContainer>

                <ButtonContainer to={"/"}><NavigationButton title={"Voltar"} icon={IoArrowBackOutline}/></ButtonContainer>

                <h1>Novo Filme</h1>

                <InputSection>
                    <Input placeholder={"Título"}/>
                    <Input placeholder={"Sua nota (de 0 a 5)"}/>
                </InputSection>

                <TextArea placeholder='Observações'/>

                <Markers>
                    <MarkerTag title={"React"}/>
                </Markers>

                <ButtonSection>
                <Button toDelete title={"Excluir filme"} isDinamic/>
                <Button title={"Salvar alterações"} isDinamic/>
                </ButtonSection>

                </CreateMovieContainer>
                
            </Content>
            </Container>
        )
    }