import css from './App.module.css';
// import RefBasics from '../RefBasics';
// import Player from '../Player';
// import Timer from '../Timer';
import AppHeader from '../AppHeader/AppHeader';
import LangMessage from '../LangMessage';
// import { LangContext } from '../../main';
// import { use } from 'react';

export default function App() {
    // const langCtx = use(LangContext);
    // console.log(langCtx);
    return (
        <div className={css.container}>
            {/* <RefBasics /> */}
            {/* <Player /> */}
            {/* <Timer /> */}
            <AppHeader />
            <LangMessage />
        </div>
    );
}
