import {
    BrowserRouter,
    Router,
    Routes,
    Route
} from 'react-router-dom';

function HomePage() {
    return (
        <h1>Hello</h1>
    )
}

function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomePage /> }/>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
