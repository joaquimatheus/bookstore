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
import CreateViewPublishers from './pages/CreateViewPublishers';
import CreateViewAuthors from './pages/CreateViewAuthors';
import CreateViewTranslators from './pages/CreateViewTranslators';
import CreateViewProducts from './pages/CreateViewProducts';

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
                <Route exact path="/management/products/publishers"
                    element={ <CreateViewPublishers /> }
                />
                <Route exact path="/management/products/authors"
                    element={ <CreateViewAuthors /> }
                />
                <Route exact path="/management/products/translators"
                    element={ <CreateViewTranslators /> }
                />
                <Route exact path="/management/products/product" 
                    element={ <CreateViewProducts /> }
                />
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
