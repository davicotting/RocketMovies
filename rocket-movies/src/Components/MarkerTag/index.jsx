

    import { Container } from './styles';
    import { FaPlus } from "react-icons/fa6";
    import { IoMdClose } from "react-icons/io";


    export function MarkerTag({isNew, title, onClick, readOnly}){
        return(
            <Container isNew={isNew} className='isNewStyle'>
                
               { isNew ? <input type='text' placeholder='Novo marcador'/> : title }

                <button onClick={onClick}>

                { isNew ? < FaPlus/> : <IoMdClose /> }

                </button>
            </Container>
        )
    }