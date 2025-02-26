// import { useState } from 'react';

/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

//? Приклад ізоляції стану

// export default function Counter({ initialValue = 0, text = 'Click me: ' }) {
//   const [cliks, setClicks] = useState(initialValue);
//   const handleClick = () => {
//     setClicks(cliks + 1);
//   };
//   return (
//     <button onClick={handleClick}>
//       {text} {cliks}
//     </button>
//   );
// }

// ? Приклад підняття стану
export default function Counter({ text = 'Click me: ', value, onChange }) {
  return (
    <button onClick={onChange}>
      {text} {value}
    </button>
  );
}

// export default function Counter({ text = 'Click me:', onUpdate }) {
//   return <button onClick={onUpdate}>{text}</button>;
// }
