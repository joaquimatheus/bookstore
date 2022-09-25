import '../styles/management-products.css';
import FormCreate from '../components/FormCreate';

function CreateViewCategories() {
    return (
        <main className='container center'>
            <FormCreate title="Categories" endpoint="categories" />
        </main>
    )
}

export default CreateViewCategories
