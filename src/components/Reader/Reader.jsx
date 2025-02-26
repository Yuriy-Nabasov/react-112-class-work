import { useState } from 'react';
import styles from './Reader.module.css';

// {
//   "id": 1,
//   "topic": "Web Technologies",
//   "text": "Web technologies encompass a wide range of tools, languages, and techniques used to develop web applications and websites. These technologies include HTML, CSS, JavaScript, and various frameworks and libraries like React and Angular. HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It defines the structure and content of a web page using elements and tags."
// }

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const currentArticle = items[selectedIdx];
  const isFirstEl = selectedIdx === 0;
  const isLastEl = selectedIdx === items.length - 1;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.controls}>
          <button
            className={styles.button}
            onClick={handlePrev}
            disabled={isFirstEl}
          >
            Prev
          </button>
          <button
            className={styles.button}
            onClick={handleNext}
            disabled={isLastEl}
          >
            Next
          </button>
        </div>
        <p className={styles.progress}>
          {selectedIdx + 1}/{items.length}
        </p>
      </header>

      <article className={styles.article}>
        <h2 className={styles.title}>{currentArticle.topic}</h2>
        <p className={styles.text}>{currentArticle.text}</p>
      </article>
    </div>
  );
}
