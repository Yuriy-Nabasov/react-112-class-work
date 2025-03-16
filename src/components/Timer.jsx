import { useState } from 'react';
import { useRef } from 'react';

/**
 * - Зберігання значень між оновленнями компонента
 * - Відсутність реактивності
 */
export default function Timer() {
    // const valueRef = useRef(0);
    // const incrValueRef = () => {
    //     valueRef.current += 1;
    //     console.log(valueRef);
    // };
    const [time, setTime] = useState(0);
    const timerRef = useRef();
    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        console.log(`Start timer: `, timerRef);
    };
    const stopTimer = () => {
        console.log(`Stop timer:`, timerRef);
        clearInterval(timerRef.current);
    };
    return (
        <div>
            <p>Час: {time} секунд</p>
            <button onClick={startTimer}>Старт</button>
            <button onClick={stopTimer}>Стоп</button>
            {/* <button onClick={incrValueRef}>
                Update valueRef {valueRef.current}
            </button> */}
        </div>
    );
}
