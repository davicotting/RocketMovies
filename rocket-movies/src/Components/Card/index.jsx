
import { Container, Rating, TagGroup, CardLink } from './styles';
import { Tags } from '../Tags';


import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";



export function Card({data, ...rest}){
    return(
        <CardLink to={"/preview/1"}>
        <Container {...rest}>

        <h2>{data.title}</h2>

        <Rating>
        <IoIosStar size={12} />
        <IoIosStar size={12} />
        <IoIosStar size={12} />
        <IoIosStar size={12} />
        <IoIosStarHalf size={12}/>
        </Rating>

        <p>{data.description}</p>
        
        <TagGroup>
        {data.tags && data.tags.map(tag => <Tags key={tag.id} title={tag.name} /> )}
        </TagGroup>
        </Container>
        </CardLink>
    )
}