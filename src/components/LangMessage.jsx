import { use } from 'react';
// import { useLang } from '../components/hooks/useLang';
import { LangContext } from './context/lang';

const text = {
    uk: 'Вибрана мова',
    en: 'Selected language',
    pl: 'Wybrany język',
    es: 'Idioma seleccionado',
    de: 'Ausgewählte Sprache',
};

export default function LangMessage() {
    // const langCtx = useLang();
    const langCtx = use(LangContext);
    return (
        <p>
            {/* <b>{text.en}</b>: Selected language */}
            <b>{text[langCtx.lang]}</b>: {langCtx.lang}
        </p>
    );
}
