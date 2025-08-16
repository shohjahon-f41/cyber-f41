import {createContext, useState} from 'react';

export const LanguageContext = createContext(null);

function LanguageProvider({children}) {
	const LocaleLang = localStorage.getItem('lang') || 'uz';

	const [language, setLanguage] = useState(LocaleLang);
	console.log(language);

	return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;
