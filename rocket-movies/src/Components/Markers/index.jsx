
    import { Container, MarkersSection } from './styles';
    import {MarkerTag} from '../MarkerTag';

    export function Markers(){
        return(
            <Container>

                <h2>Marcadores</h2>

                <MarkersSection>
                        <MarkerTag title={'React'}/>
                        <MarkerTag isNew readOnly/>
                </MarkersSection>
            </Container>
        )
    }