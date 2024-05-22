
    import { Container, Content, MyNotes, MyNotesHeader, ButtonContainer } from './styles';
    import { Header } from '../../Components/Header';
    import { Button } from '../../Components/Button';
    import { Card } from '../../Components/Card';

    import { HiOutlinePlusSm } from "react-icons/hi";

    export function Home(){
        return(

        <Container>
            <Header/>

            <Content>
                <MyNotesHeader>
                <h1>Meus filmes</h1>

                <ButtonContainer to={"/create"}><Button icon={HiOutlinePlusSm}title={"Adicionar filme"}/></ButtonContainer>
                </MyNotesHeader>



            <MyNotes>

        <Card data={
        {title: "Interestellar",

        description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
            comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi 
            aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – 
            nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados 
            dos astronautas; se um dos planetas se mostrar habitável, 
        a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
        Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, 
        o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
        porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: 
        cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é 
        coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, 
        matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram..`,

        tags: [
            { id: "1", name: "Ficção Científica" },
            { id: "2", name: "Drama" },
            { id: "3", name: "Família" }
        ]
        }}/>

        <Card data={
            {
                title: "Forrest Gump",

                description: `Forrest Gump é uma história que se desenrola ao longo de várias décadas da história americana, começando nos anos 50 e continuando até os anos 80. 
                Forrest é um homem simples com um QI abaixo da média, mas com um coração puro e uma determinação inabalável. Através de sua jornada, ele se torna uma parte 
                influente de muitos eventos significativos, 
                incluindo a guerra do Vietnã, o movimento pelos direitos civis e o boom do pingue-pongue internacional.
                Apesar de todas as adversidades e desafios que enfrenta, Forrest mantém uma visão otimista da vida, inspirando aqueles ao seu 
                redor com sua honestidade e bondade inabaláveis. 
                Ele se torna um corredor excepcional, um herói de guerra condecorado, um empresário de sucesso e, acima de tudo, um amigo leal.
                A história é narrada através das memórias de Forrest enquanto ele senta em uma parada de ônibus, compartilhando sua vida extraordinária com estranhos 
                que esperam o próximo ônibus. 
                Ele reflete sobre seu amor de infância, Jenny, que o ensina sobre o amor e a vida, mas também luta com seus próprios demônios.
                No final, Forrest percebe o que realmente importa na vida e a importância de amor, família e amizade. Sua jornada é uma prova de que, com determinação e coração, 
                qualquer um pode fazer a diferença no mundo.`,

                tags: [
                    { id: "2", name: "Drama" },
                    { id: "4", name: "Comédia" },
                    { id: "5", name: "Romance" }
                ]
            }
        }/>

        <Card data={
            {
                title: "De Volta para o Futuro",

                description: `Marty McFly, um adolescente de uma pequena cidade dos Estados Unidos, é acidentalmente enviado 30 anos para o passado em uma máquina do tempo construída pelo excêntrico Dr. Emmett "Doc" Brown. 
                No passado, Marty encontra versões mais jovens de seus pais e, inadvertidamente, altera o curso da história, ameaçando sua própria existência. Agora, ele precisa encontrar uma maneira de consertar as coisas e 
                voltar para o seu tempo original.

                Com a ajuda do jovem "Doc" Brown, Marty embarca em uma aventura cheia de ação e humor, enfrentando desafios e reviravoltas enquanto tenta reverter as mudanças no passado e garantir o seu futuro e o de sua família.

                O filme é uma mistura perfeita de comédia, aventura e ficção científica, com performances memoráveis e um enredo cativante que cativou gerações de espectadores desde o seu lançamento. 
                "De Volta para o Futuro" é uma celebração do espírito de aventura e da importância de fazer as escolhas certas, independentemente das consequências.`,

                tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Aventura" },
                    { id: "5", name: "Comédia" }
                ]
            }
        }/>

                    
                </MyNotes>

                </Content>

                
            </Container>
        )
    }