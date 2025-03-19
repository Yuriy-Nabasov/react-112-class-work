import css from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { Routes, Route } from 'react-router';

// import { use } from 'react';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Routes>
        <Route />
        <Route />
        <Route>
          <Route />
          <Route />
        </Route>
        <Route />
      </Routes>
    </div>
  );
}
