import css from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { Routes, Route } from 'react-router';
import HomePage from '../../pages/HomePage';
import UsersPage from '../../pages/UsersPage';
import NotFoundPage from '../../pages/NotFoundPage';
import UserDatailsPage from '../../pages/UserDatailsPage';
import UserPosts from '../UserPosts/UserPosts';
import UserTodos from '../UserTodos/UserTodos';

// import { use } from 'react';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UsersPage />} />
        {/* <Route path="/dashboard/:userId" element={<UserDatailsPage />} /> */}
        <Route path="/dashboard/:userId" element={<UserDatailsPage />}>
          <Route path="posts" element={<UserPosts />} />
          <Route path="todos" element={<UserTodos />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
