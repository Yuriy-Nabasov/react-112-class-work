// import AppBar from '../AppBar/AppBar';
// import OrderForm from '../OrderForm/OrderForm';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import css from './App.module.css';
import TextInput from '../TextInput/TextInput';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import OrderForm from '../OrderForm/OrderForm';
import AppBar from '../AppBar/AppBar';

//? Не контрольовані форми
// export default function App() {
//   const [users, setUsers] = useState([]);
//   const addUser = (newUser) => {
//     setUsers((prevUsers) => {
//       return [...prevUsers, newUser];
//     });
//   };
//   return (
//     <div className={css.container}>
//       <h1>Forms in React</h1>
//       <UserForm onAdd={addUser} />
//     </div>
//   );
// }

// ? Контрольовані елементи
// export default function App() {
//   const [inputValue, setInputValue] = useState('');
//   const handleInputChange = (newValue) => {
//     // console.log(event);
//     setInputValue(newValue);
//   };
//   const [lang, setLang] = useState(`en`);
//   const handleChangeLang = (newLang) => {
//     console.log(newLang);
//     setLang(newLang);
//   };
//   return (
//     <div className={css.container}>
//       <h1>Forms in React</h1>
//       <LangSwitcher value={lang} onSelect={handleChangeLang} />
//       <h2>Current lng: {lang}</h2>
//       <TextInput value={inputValue} onFilter={handleInputChange} />
//       {/* <input type="" value={inputValue} onChange={handleChange} /> */}
//       <h2>Entered text: {inputValue}</h2>
//     </div>
//   );
// }

// ? Контрольована форма
// export default function App() {

//   return (
//     <div className={css.container}>
//       <h1>Forms in React</h1>
//       <OrderForm onOrder={(newOrder) => console.log(newOrder)} />
//     </div>
//   );
// }

// ? Прокидання пропсів
export default function App() {
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState(`en`);
  const handleFilterChange = (newValue) => {
    setFilter(newValue);
  };
  const handleChangeLang = (newLang) => {
    setLang(newLang);
  };
  return (
    <div className={css.container}>
      {/* <h1>Forms in React</h1> */}
      <AppBar
        filter={filter}
        lang={lang}
        onFilter={handleFilterChange}
        onSelectLang={handleChangeLang}
      />
      <h2>Current lng: {lang}</h2>
      <h2>Filter: {filter}</h2>
      <OrderForm onOrder={(newOrder) => console.log(newOrder)} />
    </div>
  );
}
