import css from './App.module.css';
// import Counter from '../Counter/Counter';

//? - Обробка подій
//?   Іменування атрибутів обробників on\*
//?   Додавання обробника події
//?   Посилання на функцію
//?   Анонімний колбек
//?   Об'єкт події
// export default function App() {
//   const handleClick = () => {
//     console.log('This is a click!');
//   };

//   const handleMouseEnter = (event) => {
//     console.log('handleMouseEnter', event);
//   };

//   const secondHandleClick = (value) => {
//     console.log('secondHandleClick:', value);
//   };

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>State in React</h1>
//       <button
//         onClick={
//           handleClick
//           //   {() => {

//           // console.log('This is a click!');
//           // }}
//         }
//         onMouseEnter={handleMouseEnter}
//       >
//         Click me
//       </button>
//       <button
//         onClick={() => {
//           secondHandleClick(5);
//         }}
//       >
//         Click me 5
//       </button>
//       <button
//         onClick={() => {
//           secondHandleClick(10);
//         }}
//       >
//         Click me 10
//       </button>{' '}
//       <button
//         onClick={() => {
//           secondHandleClick(15);
//         }}
//       >
//         Click me 15
//       </button>
//     </div>
//   );
// }

//? Динамічні події (реактивність)

// import { useState } from 'react';

// export default function App() {
//   // const state = useState(0);
//   // console.log(state);
//   const [cliks, setClicks] = useState(0); //Хук викликається тільки на початку компонента не в if, for, function
//   // console.log(cliks);

//   const handleClick = () => {
//     // cliks += 1; так робити категорично не можна!!! (Не можна мутувати стан!)
//     setClicks(cliks + 1);
//     // console.log(cliks); Покаже попередне значення, оскільки setClicks() асинхронна ф-я
//   };

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>State in React</h1>
//       <button onClick={handleClick}>Click me: {cliks}</button>
//     </div>
//   );
// }

//? Приклад ізоляції стану

// export default function App() {
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>State in React</h1>
//       <Counter text="A: " />
//       <Counter text="B: " initialValue={5} />
//       <Counter text="C: " />
//     </div>
//   );
// }

// ? Приклад підняття стану
// import { useState } from 'react';
// import CountDisplay from '../CountDisplay/CountDisplay';

// export default function App() {
//   const [cliks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(cliks + 1);
//   };

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>State in React</h1>

//       {/* <Counter text="A: " value={cliks} onChange={handleClick} />
//       <Counter text="B: " value={cliks} onChange={handleClick} />
//       <Counter text="C: " value={cliks} onChange={handleClick} /> */}

//       <CountDisplay count={cliks} />

//       <Counter text="A: " onChange={handleClick} />
//       <Counter text="B: " onChange={handleClick} />
//       <Counter text="C: " onChange={handleClick} />
//     </div>
//   );
// }

// ? Приклад акордіону

// import Accordion from '../Accordion/Accordion';

// const accordionItems = [
//   {
//     title: 'How does an accordion work?',
//     content:
//       'An accordion allows users to expand and collapse sections of content, typically showing only one open section at a time.',
//   },
//   {
//     title: 'What are the benefits of using an accordion?',
//     content:
//       'Accordions help organize content efficiently, reduce scrolling, and improve user experience by displaying only relevant information.',
//   },
//   {
//     title: "Can an accordion be styled to match a website's design?",
//     content:
//       'Yes, accordions can be fully customized with CSS or component libraries to fit the look and feel of any website.',
//   },
//   {
//     title: 'How to create an accordion in React?',
//     content:
//       'In React, you can create an accordion using state to track the open section and conditionally render content.',
//   },
//   {
//     title: 'Are there any ready-made libraries for accordions?',
//     content:
//       'Yes, libraries like Material-UI, Bootstrap, and React-Accordion provide pre-built accordion components for easy implementation.',
//   },
// ];

// export default function App() {
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>State in React</h1>
//       <Accordion items={accordionItems} />
//     </div>
//   );
// }

// ? Приклад рідера
import Reader from '../Reader/Reader';
import articles from '../../articles.json';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>State in React</h1>
      <Reader items={articles} />
    </div>
  );
}
