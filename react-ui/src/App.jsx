import './styles/root.css'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import SidebarHeader from './components/SidebarHeader';

function HomePage() {
    return (
        <h1>Hello</h1>
    )
}

function App() {
    return (<>
        <BrowserRouter>
            <SidebarHeader />
            <Routes>
                <Route path='/' element={ <HomePage /> }/>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
