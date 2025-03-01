import { useState, useEffect } from 'react';

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  // Приклад ефекту тільки при монтуванні
  useEffect(() => {
    console.log('ClickTracker');
  }, []);

  // Приклади ефектів при монтуванні і зміні стану
  useEffect(() => {
    console.log('Clicks changed: ', clicks);
  }, [clicks]);

  useEffect(() => {
    console.log('Date changed: ', date);
  }, [date]);

  // Приклад декількох ефектів при монтуванні і зміні стану
  useEffect(() => {
    console.log('Clicks or date changed: ', date, clicks);
  }, [date, clicks]);

  // Приклад ефекта при "пропуску" монтування та зміні стану
  useEffect(() => {
    if (clicks === 0) {
      return;
    }
    console.log('Clicks changed: ', clicks);
  }, [clicks]);

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
