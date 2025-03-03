import AppBar from '../AppBar/AppBar';
import OrderForm from '../OrderForm/OrderForm';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <h2>Current lang: </h2>
      <h2>Filter: </h2>
      <OrderForm />
    </div>
  );
}
