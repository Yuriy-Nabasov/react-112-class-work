import { useState } from 'react';
// import ClickTracker from '../ClickTracker/ClickTracker';
// import Sidebar from '../Sidebar/Sidebar';
import Timer from '../Timer/Timer';
// import Reader from '../Reader/Reader';
// import articles from '../../articles.json';

// import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
// import ActivityTracker from '../ActivityTracker/ActivityTracker';
import css from './App.module.css';

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const openSidebar = () => setIsOpen(true);

  // const closeSidebar = () => setIsOpen(false);

  const [isTimerMounted, setIsTimerMounted] = useState(false);

  const toggleTimer = () => setIsTimerMounted(!isTimerMounted);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Effects in React</h1>
      {/* <ClickTracker /> */}
      {/* <button onClick={openSidebar}>Open</button>
      {isOpen && <Sidebar onClose={closeSidebar} />} */}
      <button onClick={toggleTimer}>{isTimerMounted ? 'Hide' : 'Show'}</button>
      {isTimerMounted && <Timer />}
      {/* <Reader items={articles} /> */}
      {/* <ThemeSwitcher /> */}
      {/* <ActivityTracker /> */}
    </div>
  );
}
