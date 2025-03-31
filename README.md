# [Заняття 11 - Бібліотека Redux](https://www.youtube.com/watch?v=rMyjxtxEIf4)

## Алгоритм дій для реалізаціії якогось функціоналу

Один раз на додаток створити `store` та редюсер

1. Оголосити компонент(и)
2. Підписати компонент(и) на дані в `store` через `useSelector`
3. Оголосити екшен за допомогою `createAction`
4. Відправити екшен із компонента через `useDispatch`
5. Обробити екшен в редюсері

## Управління станом

- Глобальний стан та потік даних
- Встановлення бібліотек
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)

```shell
npm install @reduxjs/toolkit react-redux
```

## Store: Єдине джерело правди

- Функція `configureStore`
- Розбір Redux Devtools
- Підписка на стор хуком `useSelector`

## Actions: Описують, що сталося

- Фабрики екшенів
- Функція `createAction`

## Dispatch: Надсилає дії (actions)

- Відправлення екшенів з `useDispatch`

## [Reducers: Визначають, як змінюється стан](https://youtu.be/rMyjxtxEIf4?t=1876)

- Сігнатура редюсера
- Кореневий редюсер
- Чому за замовчуванням `return state`
- Обробка екшенів

## Практика

- Налаштування Redux у папці `src/redux`
- Стор у файлі `store.js`

![UI завдання](https://raw.githubusercontent.com/goitacademy/react-course-track/11-redux/assets/task.gif)

Початковий стан:

```js
{
  balance: {
    value: 0
  },
  locale: {
    lang: "uk"
  }
}
```

<!-- https://create.kahoot.it/details/ua-6-1-redux/93bec0b2-ab02-412a-a8e4-d343a48f58dc -->

- [Kahoot](https://youtu.be/rMyjxtxEIf4?t=5055)
- [Відповіді на питання](https://youtu.be/rMyjxtxEIf4?t=5806)
