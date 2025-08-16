import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import './assets/scss/main.scss';
import CartProvider from './contexts/CartContext.jsx';
import LanguageProvider from './contexts/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<LanguageProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</LanguageProvider>
	</BrowserRouter>,
);
