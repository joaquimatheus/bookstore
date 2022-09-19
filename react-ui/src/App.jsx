import './styles/root.css'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';

import SidebarHeader from './components/SidebarHeader';

function App() {
    return (<>
        <BrowserRouter>
            <SidebarHeader />
            <Routes>
                <Route path='/management' element={ <Home /> }>
                    <Route path='products' element={ <Home /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
