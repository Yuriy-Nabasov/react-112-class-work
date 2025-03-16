import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import LangProvider from './components/context/lang';
import 'modern-normalize';
import './index.css';

// export const LangContext = createContext();

// // Контекст це можливість створити глобальний стан

// function LangProvider({ children }) {
//     const [appLang, setAppLang] = useState('en');
//     const changeLang = (newLang) => {
//         setAppLang(newLang);
//     };
//     return (
//         <LangContext value={{ lang: appLang, changeLang }}>
//             {children}
//         </LangContext>
//     );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LangProvider>
            <App />
        </LangProvider>
    </React.StrictMode>
);
