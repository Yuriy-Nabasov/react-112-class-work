/**
 * - Створення та ініціалізація
 * - Зберігання посилання на елемент
 * - Життєвий цикл рефа
 *  - Ініціалізація при монтуванні
 *  - Доступ в ефектах і функціях
 */

// import { useEffect } from 'react';
import { useRef } from 'react';

export default function RefBasics() {
    const inputRef = useRef();
    console.log(inputRef);
    // useEffect(() => {
    //     console.log(inputRef);
    // }, [inputRef]);
    const setFocus = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={setFocus}>Set focus to input</button>
        </div>
    );
}
