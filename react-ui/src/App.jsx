import './styles/root.css'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Management from './pages/Management';
import ManagementProduct from './pages/ManagementProducts';
import CreateViewCategories from './pages/CreateViewCategories';

import SidebarHeader from './components/SidebarHeader';

function App() {
    return (<>
        <BrowserRouter>
            <SidebarHeader />
            <Routes>
                <Route path="/" index element={ <Home /> } />
                <Route path='/management' element={ <Management />} />
                <Route exact path='/management/products' element={ <ManagementProduct /> }/>
                <Route exact path="/management/products/categories" 
                    element={ <CreateViewCategories /> } 
                />
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
