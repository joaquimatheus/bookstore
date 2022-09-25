import '../styles/management-products.css';
import FormCreate from '../components/FormCreate';

function CreateViewTranslators() {
    return (
        <main className="container center">
            <FormCreate title="Translators" endpoint="translators" />
        </main>
    )
}

export default CreateViewTranslators;
