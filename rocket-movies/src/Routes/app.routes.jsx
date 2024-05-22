
    import { Routes, Route } from 'react-router-dom';

    import { Home } from '../Pages/Home';
    import { Profile } from '../Pages/Profile';
    import { CreateMovie } from '../Pages/CreateMovie';
    import { MoviePreview } from '../Pages/MoviePreview';

    export function AppRoutes(){
        return(
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/create' element={<CreateMovie/>}/>
                <Route path='/preview/:id' element={<MoviePreview/>}/>
            </Routes>
        )
    }




    