import {createRoot} from 'react-dom/client';
import {App} from './App.jsx';
import {MaxUI} from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';

const Root = () => (
    <MaxUI>
        <App />
    </MaxUI>
)

createRoot(document.getElementById('app')).render(<Root/>);