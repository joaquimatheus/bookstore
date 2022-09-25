import '../styles/management-products.css';
import FormCreate from '../components/FormCreate';

function CreateViewAuthors() {
    return (
        <main className="container center">
            <FormCreate title="Authors" endpoint="authors" />
        </main>
    )
}

export default CreateViewAuthors
