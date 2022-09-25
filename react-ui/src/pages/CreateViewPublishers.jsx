import '../styles/management-products.css';
import FormCreate from '../components/FormCreate';

function CreateViewPublishers() {
    return (
        <main className="container center">
            <FormCreate title="Publishers" endpoint="publishers" />
        </main>
    )
}

export default CreateViewPublishers
