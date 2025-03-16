/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

import { use } from 'react';
import { LangContext } from './context/lang';

export default function LangSwitcher() {
    const langCtx = use(LangContext);
    // console.log(ctx);
    const handleChange = (e) => {
        langCtx.changeLang(e.target.value);
    };
    return (
        <select value={langCtx.lang} onChange={handleChange}>
            <option value="uk">Українська</option>
            <option value="en">English</option>
            <option value="pl">Polski</option>
            <option value="es">Española</option>
            <option value="de">Deutsch</option>
        </select>
    );
}
